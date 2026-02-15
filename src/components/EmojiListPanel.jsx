import EmojiListSection from './EmojiListSection'

export default function EmojiListPanel({
  likedTitle,
  passedTitle,
  likedEmojis,
  passedEmojis,
  renderListItem
}) {
  return (
    <div className='overall-emoji-lists-container'>
      <EmojiListSection
        title={likedTitle}
        emojis={likedEmojis}
        renderListItem={renderListItem}
      />
      <EmojiListSection
        title={passedTitle}
        emojis={passedEmojis}
        renderListItem={renderListItem}
      />
    </div>
  )
}
