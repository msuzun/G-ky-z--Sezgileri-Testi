const visualPool = [
  {
    id: 'ay-halesi',
    label: 'Merkur',
    imageSrc: '/assets/flight-visuals/horizon-line.svg',
    themeWeights: { ayZaman: 3, hayretMerak: 1 }
  },
  {
    id: 'sessiz-dolunay',
    label: 'Venus',
    imageSrc: '/assets/flight-visuals/quiet-takeoff.svg',
    themeWeights: { ayZaman: 3, gozlemSabir: 1 }
  },
  {
    id: 'ince-harita',
    label: 'Dunya',
    imageSrc: '/assets/flight-visuals/navigation-chart.svg',
    themeWeights: { olcuDuzen: 3, spektrumIsik: 1 }
  },
  {
    id: 'derin-parilti',
    label: 'Mars',
    imageSrc: '/assets/flight-visuals/cloud-layers.svg',
    themeWeights: { derinUzay: 3, hayretMerak: 1 }
  },
  {
    id: 'renk-akisi',
    label: 'Jupiter',
    imageSrc: '/assets/flight-visuals/radar-scan.svg',
    themeWeights: { spektrumIsik: 3, derinUzay: 1 }
  },
  {
    id: 'nazik-cizgi',
    label: 'Saturn',
    imageSrc: '/assets/flight-visuals/heading-balance.svg',
    themeWeights: { gozlemSabir: 2, olcuDuzen: 1 }
  },
  {
    id: 'gece-izleri',
    label: 'Uranus',
    imageSrc: '/assets/flight-visuals/approach-path.svg',
    themeWeights: { hayretMerak: 2, derinUzay: 1 }
  },
  {
    id: 'sakin-ufuk',
    label: 'Neptun',
    imageSrc: '/assets/flight-visuals/cockpit-notes.svg',
    themeWeights: { gozlemSabir: 3, ayZaman: 1 }
  },
  {
    id: 'lila-seher',
    label: 'Pluton',
    imageSrc: '/assets/flight-visuals/route-line.svg',
    themeWeights: { spektrumIsik: 2, hayretMerak: 2 }
  },
  {
    id: 'yildiz-danteli',
    label: 'Ay',
    imageSrc: '/assets/flight-visuals/compass-ring.svg',
    themeWeights: { olcuDuzen: 3, spektrumIsik: 1 }
  },
  {
    id: 'rotor-01',
    label: 'Samanyolu',
    imageSrc: '/assets/flight-visuals/altimetre.svg',
    themeWeights: { olcuDuzen: 2, gozlemSabir: 1 }
  },
  {
    id: 'rotor-02',
    label: 'Andromeda',
    imageSrc: '/assets/flight-visuals/heading-rose.svg',
    themeWeights: { spektrumIsik: 2, olcuDuzen: 1 }
  },
  {
    id: 'rotor-03',
    label: 'Sombrero Galaksisi',
    imageSrc: '/assets/flight-visuals/runway-lights.svg',
    themeWeights: { ayZaman: 2, hayretMerak: 1 }
  },
  {
    id: 'rotor-04',
    label: 'Whirlpool Galaksisi',
    imageSrc: '/assets/flight-visuals/approach-cone.svg',
    themeWeights: { derinUzay: 2, ayZaman: 1 }
  },
  {
    id: 'rotor-05',
    label: 'Cartwheel Galaksisi',
    imageSrc: '/assets/flight-visuals/glide-slope.svg',
    themeWeights: { derinUzay: 2, gozlemSabir: 1 }
  },
  {
    id: 'rotor-06',
    label: 'Buyuk Macellan Bulutu',
    imageSrc: '/assets/flight-visuals/wind-rose.svg',
    themeWeights: { spektrumIsik: 2, hayretMerak: 1 }
  },
  {
    id: 'rotor-07',
    label: 'Kucuk Macellan Bulutu',
    imageSrc: '/assets/flight-visuals/waypoint-chain.svg',
    themeWeights: { olcuDuzen: 2, derinUzay: 1 }
  },
  {
    id: 'rotor-08',
    label: 'Orion Bulutsusu',
    imageSrc: '/assets/flight-visuals/cloud-window.svg',
    themeWeights: { hayretMerak: 2, ayZaman: 1 }
  },
  {
    id: 'rotor-09',
    label: 'Lagoon Bulutsusu',
    imageSrc: '/assets/flight-visuals/horizon-gauge.svg',
    themeWeights: { gozlemSabir: 2, ayZaman: 1 }
  },
  {
    id: 'rotor-10',
    label: 'Eagle Bulutsusu',
    imageSrc: '/assets/flight-visuals/route-grid.svg',
    themeWeights: { olcuDuzen: 2, spektrumIsik: 1 }
  },
  {
    id: 'rotor-11',
    label: 'Ring Bulutsusu',
    imageSrc: '/assets/flight-visuals/radar-echo.svg',
    themeWeights: { spektrumIsik: 2, derinUzay: 1 }
  },
  {
    id: 'rotor-12',
    label: 'Helix Bulutsusu',
    imageSrc: '/assets/flight-visuals/compass-card.svg',
    themeWeights: { olcuDuzen: 2, gozlemSabir: 1 }
  },
  {
    id: 'rotor-13',
    label: 'Pleiades',
    imageSrc: '/assets/flight-visuals/taxi-plan.svg',
    themeWeights: { ayZaman: 2, olcuDuzen: 1 }
  },
  {
    id: 'rotor-14',
    label: 'Sirius',
    imageSrc: '/assets/flight-visuals/cabin-window.svg',
    themeWeights: { hayretMerak: 2, gozlemSabir: 1 }
  },
  {
    id: 'rotor-15',
    label: 'Betelgeuse',
    imageSrc: '/assets/flight-visuals/turn-marker.svg',
    themeWeights: { derinUzay: 2, spektrumIsik: 1 }
  },
  {
    id: 'rotor-16',
    label: 'Rigel',
    imageSrc: '/assets/flight-visuals/map-overlay.svg',
    themeWeights: { olcuDuzen: 2, derinUzay: 1 }
  },
  {
    id: 'rotor-17',
    label: 'Polaris',
    imageSrc: '/assets/flight-visuals/flight-notes.svg',
    themeWeights: { gozlemSabir: 2, ayZaman: 1 }
  },
  {
    id: 'rotor-18',
    label: 'Vega',
    imageSrc: '/assets/flight-visuals/night-approach.svg',
    themeWeights: { hayretMerak: 2, derinUzay: 1 }
  },
  {
    id: 'rotor-19',
    label: 'Altair',
    imageSrc: '/assets/flight-visuals/wingline.svg',
    themeWeights: { spektrumIsik: 2, gozlemSabir: 1 }
  },
  {
    id: 'rotor-20',
    label: 'Antares',
    imageSrc: '/assets/flight-visuals/calm-air.svg',
    themeWeights: { ayZaman: 2, hayretMerak: 1 }
  }
]

export default visualPool
