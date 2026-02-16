import visualPool from './sky/visualPool'

const uiText = {
  title: 'Sessiz Ufuk',
  subtitle: 'Sadece yukarı bakarken durup düşünmek için küçük bir an.',
  retryButtonLabel: 'Gökyüzüne Tekrar Bak',
  loadingLabel: 'İllüstrasyonlar yükleniyor...',
  calculatingLabel: 'Kart hazırlanıyor',
  showResultButtonLabel: 'Sonucu Gör',
  likedListTitle: 'Seçtiklerin',
  passedListTitle: 'Geçilenler',
  fallbackResultTitle: 'Mesaj',
  fallbackResultBody: 'Ortak mesaj: Gökyüzüne bakmak, insana ölçü, merak ve sükûneti birlikte hatırlatır.',
  quoteLabel: 'İlham Metni',
  reflectionLabel: 'Bu An İçin',
  commonReflectionMessage:
    'Ortak mesaj: Gökyüzüne bakmak, insana ölçü, merak ve sükûneti birlikte hatırlatır.'
}

const skyTheme = {
  id: 'sky',
  visualPool,
  uiText
}

export default skyTheme
