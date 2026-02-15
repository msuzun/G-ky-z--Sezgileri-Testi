import { useState, useEffect, useMemo } from 'react'
import ResultsModal from './components/ResultsModal'
import EmojiLists from './components/EmojiLists'
import emojis from './data/emojis'
import computeResult from './lib/computeResult'
import emojiPersonalityTheme from './themes/emojiPersonalityTheme'
import './styles.css'

export default function App() {
  const [likedEmojis, setLikedEmojis] = useState([])
  const [passedEmojis, setPassedEmojis] = useState([])
  const [currentEmojis, setCurrentEmojis] = useState(getRandomEmojis())
  const [showResults, setShowResults] = useState(false)
  const [resultsReady, setResultsReady] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  function handleClick() {
    const clickedEmoji = event.target.textContent;
    const newLikedEmojis = [...likedEmojis, clickedEmoji];
    const newPassedEmojis = currentEmojis.filter(emoji => emoji !== clickedEmoji);
  
    setLikedEmojis(newLikedEmojis);
    setPassedEmojis([...passedEmojis, ...newPassedEmojis]);
    setCurrentEmojis(getRandomEmojis());
  }
  function getRandomEmojis() {
    function chooseRandomEmoji() {
      return emojis[Math.floor(Math.random() * emojis.length)]
    }
    return new Array(3).fill('').map((item) => chooseRandomEmoji())
  }

  function getResults() {
    setShowResults(true)
  }

  function reset() {
    setLikedEmojis([])
    setPassedEmojis([])
    setShowResults(false)
    setResultsReady(false)
  }

  useEffect(() => {
    showResults &&
      setTimeout(() => {
        setResultsReady(true)
      }, 2000)
  }, [showResults])

  function generateListItems(element) {
    return <li key={crypto.randomUUID()}>{element}</li>
  }

  const computedResult = useMemo(
    () => computeResult(likedEmojis, emojiPersonalityTheme),
    [likedEmojis]
  )

  useEffect(() => {
    // Emojilerin yüklenmesi
    setHydrated(true)
  }, [])

  return (
    <div className='wrapper'>
      <div className='results-counter'>{likedEmojis.length} / 10</div>

      <ResultsModal
        showResults={showResults}
        getResults={getResults}
        resultsReady={resultsReady}
        reset={reset}
        generateListItems={generateListItems}
        likedEmojis={likedEmojis}
        computedResult={computedResult}
      />

      <h1>Emoji Kişilik Testi</h1>

      {hydrated ? ( // hydrated true olduğunda içeriği göster
        <>
          <div className='overall-emojis-container'>
            <button onClick={handleClick}>{currentEmojis[0]}</button>
            <button onClick={handleClick}>{currentEmojis[1]}</button>
            <button onClick={handleClick}>{currentEmojis[2]}</button>
          </div>

          <EmojiLists
            likedEmojis={likedEmojis}
            passedEmojis={passedEmojis}
            generateListItems={generateListItems}
          />
        </>
      ) : (
        // hydrated false olduğunda yükleniyor mesajını göster
        <p>Emojiler yükleniyor...</p>
      )}
    </div>
  )
}
