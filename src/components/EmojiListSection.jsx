export default function EmojiListSection({ title, emojis, renderListItem }) {
  return (
    <div className='individual-emoji-list-container'>
      <h3>{title}</h3>
      <ul>{emojis.map(renderListItem)}</ul>
    </div>
  )
}
