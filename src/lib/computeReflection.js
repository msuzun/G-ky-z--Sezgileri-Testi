import visualPool from '../themes/sky/visualPool.js'
import reflectionQuotes from '../themes/sky/reflectionQuotes.js'
import { reflectionTemplates, reflectionThemes } from '../themes/sky/reflectionTemplates.js'

const defaultThemeKey = 'gozlemSabir'

function hashSeed(input) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash
}

function deterministicPick(items, seedSource) {
  if (!items.length) {
    return null
  }
  const seed = hashSeed(seedSource)
  return items[seed % items.length]
}

function resolveThemeKey(selectedVisualIds) {
  const scoreByTheme = {}
  const uniqueIds = Array.from(new Set(selectedVisualIds))

  for (const id of uniqueIds) {
    const visual = visualPool.find((entry) => entry.id === id)
    if (!visual?.themeWeights) {
      continue
    }

    for (const [themeKey, weight] of Object.entries(visual.themeWeights)) {
      scoreByTheme[themeKey] = (scoreByTheme[themeKey] ?? 0) + weight
    }
  }

  const themeKeys = Object.keys(reflectionThemes)
  const ranked = themeKeys.sort((a, b) => (scoreByTheme[b] ?? 0) - (scoreByTheme[a] ?? 0))
  const bestTheme = ranked[0]

  if (!bestTheme || (scoreByTheme[bestTheme] ?? 0) <= 0) {
    return defaultThemeKey
  }

  return bestTheme
}

function pickQuote(themeKey, selectionSeed) {
  const preferredThinkerByTheme = {
    spektrumIsik: 'Ibn Sina',
    ayZaman: 'Imam Gazali',
    derinUzay: 'Ibn Arabi',
    gozlemSabir: 'Mevlana',
    hayretMerak: 'Fahreddin Razi',
    olcuDuzen: 'Biruni'
  }

  const themedQuotes = reflectionQuotes.filter((quote) => quote.themeKeys.includes(themeKey))
  const preferredThinker = preferredThinkerByTheme[themeKey]
  const preferredQuotes = themedQuotes.filter((quote) => quote.thinkerName === preferredThinker)
  const quotePool = preferredQuotes.length ? preferredQuotes : themedQuotes.length ? themedQuotes : reflectionQuotes

  return deterministicPick(quotePool, `${selectionSeed}|quote|${themeKey}`)
}

function pickReflectionText(themeKey, selectionSeed) {
  const templates = reflectionTemplates[themeKey] ?? reflectionTemplates[defaultThemeKey]
  return deterministicPick(templates, `${selectionSeed}|note|${themeKey}`) ?? ''
}

export function formatQuote(quote) {
  if (!quote) {
    return ''
  }

  const content = quote.inspirationText ?? quote.text ?? ''
  if (!content) {
    return ''
  }

  if (quote.isVerified) {
    return `"${content}"`
  }

  return `${quote.thinkerName}'in dusuncesinden ilhamla: ${content}`
}

export default function computeReflection(selectedVisualIds) {
  const normalizedIds = Array.from(new Set(selectedVisualIds)).sort()
  const selectionSeed = normalizedIds.join('|') || 'default'
  const themeKey = resolveThemeKey(normalizedIds)
  const theme = reflectionThemes[themeKey] ?? reflectionThemes[defaultThemeKey]
  const quote = pickQuote(themeKey, selectionSeed)
  const reflectionText = pickReflectionText(themeKey, selectionSeed)

  return {
    themeKey,
    theme,
    quote,
    reflectionText
  }
}

