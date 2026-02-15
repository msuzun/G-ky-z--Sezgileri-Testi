const resultProfiles = [
  {
    id: 'warm',
    label: 'sıcakkanlı ve pozitif',
    title: 'Sıcakkanlı ve Pozitif',
    mainText: 'İletişimde sıcak, net ve iyi hissettiren bir iz bırakıyorsun.',
    subNote: 'Yeni tanışmalarda sohbeti doğalca açan bir enerjin var.'
  },
  {
    id: 'curious',
    label: 'meraklı ve yaratıcı',
    title: 'Meraklı ve Yaratıcı',
    mainText: 'Yeni fikirleri hızlı yakalıyor, konuşmaya yaratıcı bir açı katıyorsun.',
    subNote: 'Nazik merakın karşı tarafı rahat hissettiriyor.'
  },
  {
    id: 'balanced',
    label: 'dengeli ve güven veren',
    title: 'Dengeli ve Güven Veren',
    mainText: 'Neşeyi ve sakinliği dengeli taşıyorsun; bu da güvenli bir etki yaratıyor.',
    subNote: 'Baskısız, ölçülü ve dikkatli bir iletişim tarzın var.'
  },
  {
    id: 'playful',
    label: 'neşeli ve akıcı',
    title: 'Neşeli ve Akıcı',
    mainText: 'Sohbeti hafif ama zeki bir tonda canlı tutuyorsun.',
    subNote: 'İlk tanışmada doğal bir yakınlık kurmayı kolaylaştırıyorsun.'
  }
]

const scoringRules = [
  {
    id: 'hearts-to-warm',
    profileId: 'warm',
    emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '💖', '💗', '💕', '💞', '💘', '💝'],
    weight: 3
  },
  {
    id: 'smiles-to-playful',
    profileId: 'playful',
    emojis: ['😀', '😃', '😄', '😁', '😆', '🙂', '😉', '😊', '😎', '🤩', '🥳', '🤣'],
    weight: 2
  },
  {
    id: 'cosmic-to-curious',
    profileId: 'curious',
    emojis: ['🌙', '⭐️', '🌟', '✨', '💫', '🌌', '☄️', '🌍', '🌎', '🌏'],
    weight: 2
  },
  {
    id: 'nature-to-balanced',
    profileId: 'balanced',
    emojis: ['🌸', '🌼', '🌻', '🌹', '🌿', '🍀', '🌳', '🌲', '🌈', '🌊'],
    weight: 2
  },
  {
    id: 'signal-to-balanced',
    profileId: 'balanced',
    emojis: ['✔️', '✅', '☑️', '➕', '➖', '⚖️', '📌', '📍'],
    weight: 1
  }
]

const emojiPersonalityTheme = {
  id: 'emoji-personality',
  resultProfiles,
  scoringRules
}

export default emojiPersonalityTheme
