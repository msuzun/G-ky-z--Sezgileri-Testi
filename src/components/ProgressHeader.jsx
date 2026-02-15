export default function ProgressHeader({ title, subtitle, progress, total }) {
  return (
    <>
      <div className='results-counter'>{progress} / {total}</div>
      <h1>{title}</h1>
      <p className='test-subtitle'>{subtitle}</p>
    </>
  )
}
