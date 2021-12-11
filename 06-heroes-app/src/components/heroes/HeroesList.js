import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import PropTypes from 'prop-types'
import { HeroCard } from './HeroCard'
import './index.css'

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="card-columns">
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </div>
  )
}

HeroesList.propTypes = {
  publisher: PropTypes.string
}
