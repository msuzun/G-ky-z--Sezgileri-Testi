const emojiPool = [
  '☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️',
  '🌪️', '🌫️', '🌈', '💧', '💨',
  '🌙', '🌛', '🌜', '🌝', '🌞', '⭐️', '🌟', '✨', '💫',
  '🌅', '🌄', '🌆', '🌇', '🌃', '🌌',
  '🌍', '🌎', '🌏', '☄️'
]

const resultProfiles = [
  {
    id: 'bright-connector',
    title: 'Işıkta Denge',
    bodyVariants: [
      'Gökyüzüyle aynı dili konuşuyorsun. Seçimlerin, iç dünyanda sükunetle birlikte canlı bir merak taşıdığını işaret ediyor. Yeni tanışmalarda alan açan, nazik bir ritim kuruyorsun.',
      'Gökyüzüne baktığında yalnız görüntü değil, anlam da okuyorsun. Bu tavır, hayreti kaybetmeden dengede kalabildiğini çağrıştırıyor. İletişimde yumuşak ama net bir iz bırakıyorsun.'
    ],
    footnoteVariants: [
      'Sözlerin ölçülü, yaklaşımın içten; bu denge güven duygusu uyandırıyor.',
      'Sakin gücün, sohbeti baskısız ve derin bir çizgide tutuyor.'
    ]
  },
  {
    id: 'calm-observer',
    title: 'Sükûnet Pusulası',
    bodyVariants: [
      'Seçtiğin semboller, önce anlamayı sonra konuşmayı tercih ettiğini hatırlatıyor. Bu tutum, sabırla kurulan bağların daha kalıcı bir sıcaklık taşıdığını çağrıştırıyor. Karşındaki kişi yanında kendini aceleye sıkışmış hissetmiyor.',
      'Sende sessiz ama güçlü bir dikkat var. Bu dikkat, ayrıntıyı incitmeden görme becerisine işaret ediyor. Yeni tanışmalarda doğal ve güvenli bir akış oluşturuyorsun.'
    ],
    footnoteVariants: [
      'Acele etmeyen üslubun, karşılıklı saygıyı görünür kılan bir zemin hazırlıyor.',
      'Sükûnetin, söze değil niyete de kulak verdiğini hissettiriyor.'
    ]
  },
  {
    id: 'storm-navigator',
    title: 'Fırtınada Merkez',
    bodyVariants: [
      'Yoğun duyguların içinden geçerken merkezini kaybetmemen dikkat çekiyor. Seçimlerin, zorluk anında bile ölçüyü koruma eğilimine işaret ediyor. Bu da seni yeni karşılaşmalarda sakinleştirici bir etkiye taşıyor.',
      'Gökyüzünün değişken ritmine rağmen sende bir iç denge hissi var. Bu denge, tepkiden çok farkındalıkla hareket ettiğini çağrıştırıyor. Konuşmalarda gerilimi büyütmeden netlik kurabiliyorsun.'
    ],
    footnoteVariants: [
      'Netliğin güçlü, tonun yumuşak; bu ikisi birlikte güven duygusu oluşturuyor.',
      'Sakin kalışın, zorlu anlarda bile konuşmayı inceltmeyi başarıyor.'
    ]
  },
  {
    id: 'horizon-dreamer',
    title: 'Ufka Açık Zihin',
    bodyVariants: [
      'Bakışın hem yakın olana hem uzağa aynı anda değiyor. Bu yaklaşım, tefekküre açık bir zihinle modern bir sadeliği birleştirdiğini çağrıştırıyor. Yeni tanışmalarda merak uyandıran ama baskı kurmayan bir dilin var.',
      'Sembollerle düşünmeyi sevdiğin hissediliyor. Seçimlerin, görünenin ardındaki ritmi fark etmeye yatkınlığına işaret ediyor. Sohbete derinlik katarken karşı tarafın sınırlarına da özen gösteriyorsun.'
    ],
    footnoteVariants: [
      'Merakın canlı, üslubun sade; bu denge sohbeti doğal biçimde derinleştiriyor.',
      'Bakışındaki incelik, anlamı büyütürken insanı yormayan bir etki bırakıyor.'
    ]
  }
]

const scoringRules = [
  { id: 'sun', profileId: 'bright-connector', emojis: ['☀️', '🌤️', '🌞', '🌅'], weight: 2 },
  { id: 'night', profileId: 'calm-observer', emojis: ['🌙', '🌛', '🌜', '🌝', '⭐️', '🌟'], weight: 2 },
  { id: 'storm', profileId: 'storm-navigator', emojis: ['🌧️', '⛈️', '🌩️', '🌪️', '🌨️'], weight: 3 },
  { id: 'flow', profileId: 'bright-connector', emojis: ['💨', '💧', '🌦️', '🌈', '✨', '💫'], weight: 2 },
  { id: 'horizon', profileId: 'horizon-dreamer', emojis: ['🌄', '🌆', '🌇', '🌃', '🌌', '☄️'], weight: 2 },
  { id: 'cosmic', profileId: 'horizon-dreamer', emojis: ['🌍', '🌎', '🌏'], weight: 1 },
  { id: 'soft-weather', profileId: 'calm-observer', emojis: ['⛅', '🌥️', '☁️', '🌫️'], weight: 1 }
]

const uiText = {
  title: 'Gokyuzu Sezgileri Testi',
  subtitle: 'Sectigin emojiler yildizlara bakisini anlatiyor.',
  retryButtonLabel: 'Gokyuzune Tekrar Bak',
  loadingLabel: 'Emojiler yukleniyor...',
  calculatingLabel: 'Sonuclarin Hesaplanmasi',
  showResultButtonLabel: 'Sonuclara Ulasin',
  likedListTitle: 'Begenilen Emojiler',
  passedListTitle: 'Gecilen Emojiler',
  fallbackResultTitle: 'Sonuc hazir',
  fallbackResultBody: 'Profilin hesaplandi.'
}

const skyTheme = {
  id: 'sky',
  emojiPool,
  resultProfiles,
  scoringRules,
  uiText
}

export default skyTheme
