export default function GentleReflectionNote({ commonMessage, reflectionText, label }) {
  return (
    <section className='gentle-reflection-note'>
      <p className='quote-card-label'>{label}</p>
      <p className='result-card-main'>{commonMessage}</p>
      <p className='result-card-note'>{reflectionText}</p>
    </section>
  )
}

