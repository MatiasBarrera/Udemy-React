// import { heroes } from  './data/Heroes'
// import { heroes } from './data/Heroes'

import { heroes } from './data/Heroes'

const getheroesById = (id) => heroes.find(heroe => heroe.id === id)
console.log(getheroesById(2))

const getHeroiesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
console.log(getHeroiesByOwner('DC'))