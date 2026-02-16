import { formatQuote } from '../lib/computeReflection'

export default function ReflectionQuoteCard({ quote, label }) {
  if (!quote) {
    return null
  }

  return (
    <article className='reflection-quote-card'>
      <p className='quote-card-label'>{label}</p>
      <p className='quote-card-text'>{formatQuote(quote)}</p>
      <p className='quote-card-meta'>
        {quote.thinkerName}
        {quote.work ? ` - ${quote.work}` : ''}
      </p>
      {quote.source ? <p className='quote-card-source'>Kaynak: {quote.source}</p> : null}
    </article>
  )
}

