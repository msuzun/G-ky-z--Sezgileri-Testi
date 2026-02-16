import ResultCard from './ResultCard'

export default function ResultsModal(props) {
  const message = !props.resultsReady ? (
    <div className='modal-inner-container'>
      <img src='./images/gear.svg' alt='Yukleniyor' />
      <p>{props.uiText.calculatingLabel}</p>
    </div>
  ) : (
    <ResultCard
      result={props.computedResult}
      onRetry={props.onReset}
      retryLabel={props.uiText.retryButtonLabel}
      uiText={props.uiText}
    />
  )

  if (props.likedEmojis.length >= props.maxSelection) {
    return (
      <div className='results-modal-container'>
        {!props.showResults ? (
          <div className='modal-inner-container'>
            <button className='get-results-button' onClick={props.onShowResults}>
              {props.uiText.showResultButtonLabel}
            </button>
          </div>
        ) : (
          message
        )}
      </div>
    )
  }

  return null
}
