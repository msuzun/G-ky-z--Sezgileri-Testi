function hashSeed(input) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash
}

function seedPick(items, seedSource) {
  const seed = hashSeed(seedSource)
  return items[seed % items.length]
}

export default function computeResult(selectedEmojis, theme) {
  const profiles = theme?.resultProfiles ?? []
  const rules = theme?.scoringRules ?? []

  if (!profiles.length) {
    return null
  }

  const scoreByProfile = {}
  const matchCountByProfile = {}
  const uniqueSelection = Array.from(new Set(selectedEmojis))

  for (const profile of profiles) {
    scoreByProfile[profile.id] = 0
    matchCountByProfile[profile.id] = 0
  }

  for (const emoji of uniqueSelection) {
    for (const rule of rules) {
      if (!rule.emojis.includes(emoji)) {
        continue
      }

      const weight = typeof rule.weight === 'number' ? rule.weight : 1
      scoreByProfile[rule.profileId] += weight
      matchCountByProfile[rule.profileId] += 1
    }
  }

  const ranked = profiles
    .map((profile) => ({
      profile,
      score: scoreByProfile[profile.id] ?? 0,
      matches: matchCountByProfile[profile.id] ?? 0
    }))
    .sort((a, b) => b.score - a.score)

  const highestScore = ranked[0]?.score ?? 0
  const topByScore = ranked.filter((entry) => entry.score === highestScore)

  if (topByScore.length === 1 && highestScore > 0) {
    return topByScore[0].profile
  }

  const highestMatchCount = Math.max(...topByScore.map((entry) => entry.matches))
  const topByMatchCount = topByScore.filter((entry) => entry.matches === highestMatchCount)

  if (topByMatchCount.length === 1 && highestScore > 0) {
    return topByMatchCount[0].profile
  }

  const source = `${theme.id || 'theme'}|${uniqueSelection.slice().sort().join('')}`
  const finalists =
    highestScore > 0
      ? topByMatchCount.map((entry) => entry.profile)
      : profiles

  return seedPick(finalists, source)
}
