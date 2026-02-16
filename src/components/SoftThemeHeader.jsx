export default function SoftThemeHeader({ theme }) {
  return (
    <div className='soft-theme-header'>
      <div className='soft-theme-glyph' aria-hidden='true'>
        <svg viewBox='0 0 24 24' className='soft-theme-icon'>
          <path d='M4 15c3-5 13-5 16 0' fill='none' stroke='currentColor' strokeWidth='1.4' />
          <circle cx='8' cy='10' r='1.4' fill='none' stroke='currentColor' strokeWidth='1.2' />
          <circle cx='15.5' cy='8' r='1.1' fill='none' stroke='currentColor' strokeWidth='1.2' />
        </svg>
      </div>
      <div>
        <p className='soft-theme-kicker'>Gökyüzü Tefekkürü</p>
        <h2 className='result-card-title'>{theme?.title || 'Sessiz Bakış'}</h2>
      </div>
    </div>
  )
}

