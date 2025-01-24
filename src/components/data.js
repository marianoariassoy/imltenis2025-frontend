export const categories = [
  // { name: 'Damas Segunda', url: '/torneos/36' },
  // { name: 'Damas Tercera ', url: '/torneos/37' },
  // { name: 'Damas Cuarta ', url: '/torneos/38' },
  // { name: 'Primera Libre', url: '/torneos/40' },
  // { name: 'Segunda Libre', url: '/torneos/41' },
  // { name: 'Tercera Libre', url: '/torneos/42' },
  // { name: 'Cuarta Libre', url: '/torneos/43' },
  // { name: 'Quinta Libre', url: '/torneos/44' },
  // { name: 'Tercera +45', url: '/torneos/39' },
  // { name: 'Sub 14 Tennis Site', url: '/torneos/45' }
]

export const menu = [
  { name: 'Torneos Anteriores', url: '/torneos-anteriores' },

  { name: 'Ranking Jugadores', url: '/ranking/jugadores' },
  { name: 'Ranking de Clubes', url: '/ranking/clubes' },
  { name: 'Ranking de Campeones', url: '/ranking/campeones' },
  { name: 'Orden de juego', url: '/orden-de-juego' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Colaboradores', url: '/colaboradores' },
  // { name: 'IML Weekend', url: '/weekend' },
  { name: 'Nosotros', url: '/nosotros' }
  // { name: 'Login', url: '/usuarios/login' }
]

export const rankingOptions = [
  {
    name: 'Damas Segunda',
    category: 9
  },
  {
    name: 'Damas Tercera',
    category: 6
  },
  {
    name: 'Damas Cuarta',
    category: 8
  },
  {
    name: 'Primera Libre',
    category: 1
  },
  {
    name: 'Segunda Libre',
    category: 2
  },
  {
    name: 'Tercera Libre',
    category: 3
  },
  {
    name: 'Cuarta Libre',
    category: 4
  },
  {
    name: 'Quinta Libre',
    category: 5
  },
  {
    name: 'Tercera +45',
    category: 7
  },
  {
    name: 'Juniors Sub 14',
    category: 10
  }
]

export const texts = {
  error: 'Se produjo un error al enviar el formulario.',
  required: 'Completá este dato',
  thanks: '¡Ya estas registrado en nuestro sistema!'
}

export const days = []
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
export const months = []
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
export const years = []
for (let i = 1930; i <= 2020; i++) {
  years.push(i)
}
