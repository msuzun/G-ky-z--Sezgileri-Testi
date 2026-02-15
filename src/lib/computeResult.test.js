import assert from 'node:assert/strict'
import test from 'node:test'
import computeResult from './computeResult.js'
import skyTheme from '../themes/skyTheme.js'
import emojiPersonalityTheme from '../themes/emojiPersonalityTheme.js'

const baseTheme = {
  id: 'test-theme',
  resultProfiles: [
    { id: 'a', label: 'A' },
    { id: 'b', label: 'B' },
    { id: 'c', label: 'C' }
  ],
  scoringRules: [
    { id: 'r1', profileId: 'a', emojis: ['one', 'two'], weight: 2 },
    { id: 'r2', profileId: 'b', emojis: ['rain'], weight: 3 },
    { id: 'r3', profileId: 'c', emojis: ['moon', 'star'], weight: 1 }
  ]
}

test('same emoji selection always returns same profile', () => {
  const first = computeResult(['one', 'two'], baseTheme)
  const second = computeResult(['two', 'one'], baseTheme)
  assert.equal(first.id, second.id)
})

test('different selections can produce different profiles', () => {
  const sunResult = computeResult(['â˜€ï¸', 'ğŸŒ¤ï¸'], skyTheme)
  const stormResult = computeResult(['ğŸŒ§ï¸', 'â›ˆï¸'], skyTheme)
  assert.notEqual(sunResult.id, stormResult.id)
})

test('legacy emoji personality theme still works', () => {
  const result = computeResult(['â¤ï¸', 'ğŸ§¡', 'ğŸ’'], emojiPersonalityTheme)
  assert.ok(result)
  const validProfileIds = emojiPersonalityTheme.resultProfiles.map((profile) => profile.id)
  assert.ok(validProfileIds.includes(result.id))
  assert.ok(typeof result.mainText === 'string')
})

test('tie-break prefers profile with more matched rules', () => {
  const tieTheme = {
    id: 'tie-theme',
    resultProfiles: [
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' }
    ],
    scoringRules: [
      { id: 'a-1', profileId: 'a', emojis: ['one'], weight: 2 },
      { id: 'b-1', profileId: 'b', emojis: ['one'], weight: 1 },
      { id: 'b-2', profileId: 'b', emojis: ['two'], weight: 1 }
    ]
  }

  const result = computeResult(['one', 'two'], tieTheme)
  assert.equal(result.id, 'b')
})

test('invalid scoring rules are ignored safely', () => {
  const malformedTheme = {
    id: 'malformed-theme',
    resultProfiles: [
      { id: 'a', title: 'A' }
    ],
    scoringRules: [
      { id: 'x', profileId: 'missing', emojis: ['one'], weight: 3 }
    ]
  }

  const result = computeResult(['one'], malformedTheme)
  assert.equal(result.id, 'a')
})
