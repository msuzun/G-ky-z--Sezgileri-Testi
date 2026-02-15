import { useEffect, useMemo, useReducer } from 'react'
import ResultsModal from './components/ResultsModal'
import EmojiListPanel from './components/EmojiListPanel'
import EmojiPicker from './components/EmojiPicker'
import ProgressHeader from './components/ProgressHeader'
import computeResult from './lib/computeResult'
import skyTheme from './themes/skyTheme'
import { GAME_CONFIG } from './config/gameConfig'
import './styles.css'

const activeTheme = skyTheme

function generateEmojiBatch(pool, batchSize) {
  function pickRandomEmoji() {
    return pool[Math.floor(Math.random() * pool.length)]
  }

  return new Array(batchSize).fill('').map(() => pickRandomEmoji())
}

function createInitialState(theme) {
  return {
    likedEmojis: [],
    passedEmojis: [],
    currentEmojis: generateEmojiBatch(theme.emojiPool, GAME_CONFIG.emojiBatchSize),
    isResultsVisible: false,
    areResultsReady: false,
    isHydrated: false
  }
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'PICK_EMOJI': {
      const clickedEmoji = action.payload
      const newLikedEmojis = [...state.likedEmojis, clickedEmoji]
      const newPassedEmojis = state.currentEmojis.filter((emoji) => emoji !== clickedEmoji)

      return {
        ...state,
        likedEmojis: newLikedEmojis,
        passedEmojis: [...state.passedEmojis, ...newPassedEmojis],
        currentEmojis: generateEmojiBatch(activeTheme.emojiPool, GAME_CONFIG.emojiBatchSize)
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
    () => computeResult(state.likedEmojis, activeTheme),
    [state.likedEmojis]
  )

  function renderEmojiListItem(element, index) {
    return <li key={`${element}-${index}`}>{element}</li>
  }

  return (
    <div className='wrapper theme-sky'>
      <div className='sky-particles-placeholder' aria-hidden='true' />

      <ProgressHeader
        title={activeTheme.uiText.title}
        subtitle={activeTheme.uiText.subtitle}
        progress={state.likedEmojis.length}
        total={GAME_CONFIG.maxSelection}
      />

      <ResultsModal
        likedEmojis={state.likedEmojis}
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
            emojis={state.currentEmojis}
            onPick={(emoji) => dispatch({ type: 'PICK_EMOJI', payload: emoji })}
          />
          <EmojiListPanel
            likedTitle={activeTheme.uiText.likedListTitle}
            passedTitle={activeTheme.uiText.passedListTitle}
            likedEmojis={state.likedEmojis}
            passedEmojis={state.passedEmojis}
            renderListItem={renderEmojiListItem}
          />
        </>
      ) : (
        <p>{activeTheme.uiText.loadingLabel}</p>
      )}
    </div>
  )
}
