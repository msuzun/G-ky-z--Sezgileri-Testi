export default function EmojiPicker({ emojis, onPick }) {
  return (
    <div className='overall-emojis-container'>
      {emojis.map((emoji, index) => (
        <button key={`${emoji}-${index}`} onClick={() => onPick(emoji)}>
          {emoji}
        </button>
      ))}
    </div>
  )
}
