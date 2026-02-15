export default function ResultCard({
  result,
  onRetry,
  retryLabel,
  fallbackTitle,
  fallbackBody
}) {
  return (
    <div className='modal-inner-container'>
      <h2 className='result-card-title'>{result?.title || fallbackTitle}</h2>
      <p className='result-card-main'>{result?.mainText || fallbackBody}</p>
      {result?.subNote ? <p className='result-card-note'>{result.subNote}</p> : null}
      <button className='try-again-button' onClick={onRetry}>
        {retryLabel}
      </button>
    </div>
  )
}
