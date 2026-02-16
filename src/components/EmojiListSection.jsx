export default function EmojiListSection({ title, emojis, renderListItem, variant }) {
  return (
    <div className={`individual-emoji-list-container ${variant === 'liked' ? 'liked-list' : 'passed-list'}`}>
      <h3>{title}</h3>
      <ul>{emojis.map(renderListItem)}</ul>
    </div>
  )
}
