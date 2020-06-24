export const whiteKeys = [
  ['C', 3, 'q'], // Phím C3
  ['D', 3, 'w'],
  ['E', 3, 'e'],
  ['F', 3, 'r'],
  ['G', 3, 't'],
  ['A', 3, 'y'],
  ['B', 3, 'u'],

  ['C', 4, 'i'],
  ['D', 4, 'o'],
  ['E', 4, 'p'],
  ['F', 4, 'z'],
  ['G', 4, 'x'],
  ['A', 4, 'c'],
  ['B', 4, 'v'],

  ['C', 5, 'b'],
  ['D', 5, 'n'],
  ['E', 5, 'm'],
  ['F', 5, ','],
  ['G', 5, '.'],
  ['A', 5, '/'],
  ['B', 5, 'l'],
];
export const whiteKeysList = [
  'q', 'w', 'e', 'r', 't', 'y', 'u',
  'i', 'o', 'p', 'z', 'x', 'c', 'v',
  'b', 'n', 'm', ',', '.', '/', 'l'
]
export const whiteKeysMapping = {
  q: whiteKeys[0],
  w: whiteKeys[1],
  e: whiteKeys[2],
  r: whiteKeys[3],
  t: whiteKeys[4],
  y: whiteKeys[5],
  u: whiteKeys[6],

  i: whiteKeys[7],
  o: whiteKeys[8],
  p: whiteKeys[9],
  z: whiteKeys[10],
  x: whiteKeys[11],
  c: whiteKeys[12],
  v: whiteKeys[13],

  b: whiteKeys[14],
  n: whiteKeys[15],
  m: whiteKeys[16],
  ',': whiteKeys[17],
  '.': whiteKeys[18],
  '/': whiteKeys[19],
  l: whiteKeys[20],
}

export const blackKeys = [
  ['C#', 3, 26, '1'], // Phím C#3, left: 26px
  ['D#', 3, 68, '2'],

  ['F#', 3, 152, '3'],
  ['G#', 3, 194, '4'],
  ['A#', 3, 236, '5'],

  ['C#', 4, 320, '6'],
  ['D#', 4, 362, '7'],

  ['F#', 4, 446, '8'],
  ['G#', 4, 488, '9'],
  ['A#', 4, 530, '0'],

  ['C#', 5, 614, 'd'],
  ['D#', 5, 656, 'f'],

  ['F#', 5, 740, 'g'],
  ['G#', 5, 782, 'h'],
  ['A#', 5, 824, 'j']
]

export const blackKeysList = [
  '1', '2',
  '3', '4', '5',
  '6', '7',
  '8', '9', '0',
  'd', 'f',
  'g', 'h', 'j'
]

export const blackKeysMapping = {
  1: blackKeys[0],
  2: blackKeys[1],

  3: blackKeys[2],
  4: blackKeys[3],
  5: blackKeys[4],

  6: blackKeys[5],
  7: blackKeys[6],

  8: blackKeys[7],
  9: blackKeys[8],
  0: blackKeys[9],

  d: blackKeys[10],
  f: blackKeys[11],

  g: blackKeys[12],
  h: blackKeys[13],
  j: blackKeys[14]
}
