import assert from 'node:assert/strict'
import test from 'node:test'
import computeReflection, { formatQuote } from './computeReflection.js'

test('selection maps to expected theme', () => {
  const result = computeReflection(['renk-akisi', 'lila-seher'])
  assert.equal(result.themeKey, 'spektrumIsik')
})

test('deterministic quote and reflection output for same selections', () => {
  const first = computeReflection(['sakin-ufuk', 'sessiz-dolunay', 'nazik-cizgi'])
  const second = computeReflection(['nazik-cizgi', 'sakin-ufuk', 'sessiz-dolunay'])

  assert.equal(first.themeKey, second.themeKey)
  assert.equal(first.quote.id, second.quote.id)
  assert.equal(first.reflectionText, second.reflectionText)
})

test('same theme keeps the same thinker', () => {
  const first = computeReflection(['ay-halesi'])
  const second = computeReflection(['sessiz-dolunay'])

  assert.equal(first.themeKey, 'ayZaman')
  assert.equal(second.themeKey, 'ayZaman')
  assert.equal(first.quote.thinkerName, second.quote.thinkerName)
})

test('unverified quote formatting does not use quote marks', () => {
  const formatted = formatQuote({
    thinkerName: 'Imam Gazali',
    inspirationText: 'Zamana bakis bir olcu hatirlatir.',
    isVerified: false
  })

  assert.ok(formatted.includes('dusuncesinden ilhamla'))
  assert.equal(formatted.startsWith('"'), false)
})

test('verified quote formatting uses quote marks', () => {
  const formatted = formatQuote({
    thinkerName: 'Ornek Isim',
    inspirationText: 'Dogrulanmis metin.',
    isVerified: true
  })

  assert.equal(formatted, '"Dogrulanmis metin."')
})

