import SoftThemeHeader from './SoftThemeHeader'
import ReflectionQuoteCard from './ReflectionQuoteCard'
import GentleReflectionNote from './GentleReflectionNote'

export default function ResultCard({
  result,
  onRetry,
  retryLabel,
  uiText
}) {
  const themeClassName = result?.theme?.backgroundClassName || 'reflection-bg-gozlem'

  return (
    <div className={`modal-inner-container reflection-card ${themeClassName}`}>
      <SoftThemeHeader theme={result?.theme} />
      <ReflectionQuoteCard quote={result?.quote} label={uiText.quoteLabel} />
      <GentleReflectionNote
        label={uiText.reflectionLabel}
        commonMessage={uiText.commonReflectionMessage}
        reflectionText={result?.reflectionText || uiText.fallbackResultBody}
      />
      <button className='try-again-button' onClick={onRetry}>
        {retryLabel}
      </button>
    </div>
  )
}
