import { useEffect, useMemo, useReducer } from 'react'
import ResultsModal from './components/ResultsModal'
import EmojiListPanel from './components/EmojiListPanel'
import EmojiPicker from './components/EmojiPicker'
import ProgressHeader from './components/ProgressHeader'
import computeReflection from './lib/computeReflection'
import skyTheme from './themes/skyTheme'
import { GAME_CONFIG } from './config/gameConfig'
import './styles.css'

const activeTheme = skyTheme

function shuffleVisuals(pool) {
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

function validateVisualPool(pool) {
  const requiredCount = GAME_CONFIG.maxSelection * GAME_CONFIG.emojiBatchSize
  const uniqueIds = new Set(pool.map((visual) => visual.id))

  if (pool.length < requiredCount) {
    throw new Error(`visualPool en az ${requiredCount} oge icermeli.`)
  }

  if (uniqueIds.size !== pool.length) {
    throw new Error('visualPool icinde tekrar eden id var.')
  }
}

function createInitialState(theme) {
  validateVisualPool(theme.visualPool)
  const shuffledVisuals = shuffleVisuals(theme.visualPool)
  return {
    likedVisualIds: [],
    passedVisualIds: [],
    currentVisuals: shuffledVisuals.slice(0, GAME_CONFIG.emojiBatchSize),
    remainingVisuals: shuffledVisuals.slice(GAME_CONFIG.emojiBatchSize),
    isResultsVisible: false,
    areResultsReady: false,
    isHydrated: false
  }
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'PICK_EMOJI': {
      const clickedVisualId = action.payload
      const newLikedVisualIds = [...state.likedVisualIds, clickedVisualId]
      const newPassedVisualIds = state.currentVisuals
        .filter((visual) => visual.id !== clickedVisualId)
        .map((visual) => visual.id)
      const isLastQuestion =
        newLikedVisualIds.length >= GAME_CONFIG.maxSelection

      if (isLastQuestion) {
        return {
          ...state,
          likedVisualIds: newLikedVisualIds,
          passedVisualIds: [...state.passedVisualIds, ...newPassedVisualIds],
          currentVisuals: [],
          remainingVisuals: []
        }
      }

      const nextVisuals = state.remainingVisuals.slice(0, GAME_CONFIG.emojiBatchSize)
      const nextRemainingVisuals = state.remainingVisuals.slice(GAME_CONFIG.emojiBatchSize)

      return {
        ...state,
        likedVisualIds: newLikedVisualIds,
        passedVisualIds: [...state.passedVisualIds, ...newPassedVisualIds],
        currentVisuals: nextVisuals,
        remainingVisuals: nextRemainingVisuals
      }
    }
    case 'SHOW_RESULTS':
      return {
        ...state,
        isResultsVisible: true
      }
    case 'SET_RESULTS_READY':
      return {
        ...state,
        areResultsReady: true
      }
    case 'RESET_GAME':
      return {
        ...createInitialState(activeTheme),
        isHydrated: state.isHydrated
      }
    case 'SET_HYDRATED':
      return {
        ...state,
        isHydrated: true
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, activeTheme, createInitialState)

  useEffect(() => {
    if (!state.isResultsVisible) {
      return undefined
    }

    const timerId = setTimeout(() => {
      dispatch({ type: 'SET_RESULTS_READY' })
    }, GAME_CONFIG.resultDelayMs)

    return () => clearTimeout(timerId)
  }, [state.isResultsVisible])

  useEffect(() => {
    dispatch({ type: 'SET_HYDRATED' })
  }, [])

  const computedResult = useMemo(
    () => computeReflection(state.likedVisualIds),
    [state.likedVisualIds]
  )

  const visualById = useMemo(
    () =>
      activeTheme.visualPool.reduce((acc, visual) => {
        acc[visual.id] = visual
        return acc
      }, {}),
    []
  )

  function renderVisualListItem(element, index) {
    const visual = visualById[element]
    return <li key={`${element}-${index}`}>{visual?.label || element}</li>
  }

  return (
    <div className='wrapper theme-sky'>
      <div className='sky-particles-placeholder' aria-hidden='true' />

      <ProgressHeader
        title={activeTheme.uiText.title}
        subtitle={activeTheme.uiText.subtitle}
        progress={state.likedVisualIds.length}
        total={GAME_CONFIG.maxSelection}
      />

      <ResultsModal
        likedEmojis={state.likedVisualIds}
        maxSelection={GAME_CONFIG.maxSelection}
        showResults={state.isResultsVisible}
        resultsReady={state.areResultsReady}
        computedResult={computedResult}
        uiText={activeTheme.uiText}
        onShowResults={() => dispatch({ type: 'SHOW_RESULTS' })}
        onReset={() => dispatch({ type: 'RESET_GAME' })}
      />

      {state.isHydrated ? (
        <>
          <EmojiPicker
            visuals={state.currentVisuals}
            selectedIds={state.likedVisualIds}
            onPick={(visualId) => dispatch({ type: 'PICK_EMOJI', payload: visualId })}
          />
          <EmojiListPanel
            likedTitle={activeTheme.uiText.likedListTitle}
            passedTitle={activeTheme.uiText.passedListTitle}
            likedEmojis={state.likedVisualIds}
            passedEmojis={state.passedVisualIds}
            renderListItem={renderVisualListItem}
          />
        </>
      ) : (
        <p>{activeTheme.uiText.loadingLabel}</p>
      )}
    </div>
  )
}
