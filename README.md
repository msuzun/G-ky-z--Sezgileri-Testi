# Emoji / Sky Test

## Acceptance Checklist
- [ ] Aynı emoji seçimi tekrarlandığında aynı profil ve aynı metin varyasyonu çıkıyor.
- [ ] Farklı emoji seçimleri farklı profillere dağılabiliyor.
- [ ] `emojiPersonalityTheme` ile eski sonuç motoru davranışı bozulmadan çalışıyor.
- [ ] Mobil görünümde (360x800 ve 390x844) taşma/kırılma yok.

## Automated Tests
Çalıştır:

```bash
node --test src/lib/computeResult.test.js
```

Kapsam:
- Deterministic sonuç (aynı seçim -> aynı profil)
- Farklı seçimlerde farklı profiller (sky theme üzerinden)
- Eski tema uyumluluğu (`emojiPersonalityTheme`)
- Tie-break davranışı
- Geçersiz kural güvenliği

## Manual Mobile Check
1. `npm run dev` ile projeyi aç.
2. Tarayıcı devtools cihaz modunda `360x800` ve `390x844` seç.
3. Şunları doğrula:
   - Üst başlık ve sayaç görünür.
   - Emoji butonları ekrandan taşmıyor.
   - Sonuç modalı tam görünür, buton erişilebilir.
   - Liste alanında yatay kaydırma oluşmuyor.
