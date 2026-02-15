import assert from 'node:assert/strict'
import test from 'node:test'
import computeResult from './computeResult.js'

const theme = {
  id: 'test-theme',
  resultProfiles: [
    { id: 'a', label: 'A' },
    { id: 'b', label: 'B' },
    { id: 'c', label: 'C' }
  ],
  scoringRules: [
    { id: 'r1', profileId: 'a', emojis: ['😀', '❤️'], weight: 2 },
    { id: 'r2', profileId: 'b', emojis: ['🌧️'], weight: 3 },
    { id: 'r3', profileId: 'c', emojis: ['🌙', '⭐️'], weight: 1 }
  ]
}

test('selects the highest scored profile', () => {
  const result = computeResult(['😀', '❤️'], theme)
  assert.equal(result.id, 'a')
})

test('tie-break prefers profile with more matched rules', () => {
  const tieTheme = {
    id: 'tie-theme',
    resultProfiles: [
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' }
    ],
    scoringRules: [
      { id: 'a-1', profileId: 'a', emojis: ['😀'], weight: 2 },
      { id: 'b-1', profileId: 'b', emojis: ['😀'], weight: 1 },
      { id: 'b-2', profileId: 'b', emojis: ['❤️'], weight: 1 }
    ]
  }

  const result = computeResult(['😀', '❤️'], tieTheme)
  assert.equal(result.id, 'b')
})

test('returns deterministic seeded result when no rules match', () => {
  const first = computeResult(['🧪'], theme)
  const second = computeResult(['🧪'], theme)
  assert.equal(first.id, second.id)
})
