export default function EmojiPicker({ visuals, selectedIds, onPick }) {
  return (
    <div className='overall-emojis-container visual-card-grid'>
      {visuals.map((visual) => (
        <button
          key={visual.id}
          className={`visual-option-card ${selectedIds.includes(visual.id) ? 'is-selected' : ''}`}
          onClick={() => onPick(visual.id)}
          type='button'
          aria-pressed={selectedIds.includes(visual.id)}
        >
          <img src={visual.imageSrc} alt={visual.label} className='visual-option-image' />
          <span className='visual-option-label'>{visual.label}</span>
        </button>
      ))}
    </div>
  )
}
