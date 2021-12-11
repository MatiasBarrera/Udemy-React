/* eslint-disable camelcase */
import React, { useMemo } from 'react'
import { Redirect, useHistory, useParams } from 'react-router'
import { loadImage } from '../../helpers/heroImages'
import { getHeroesById } from '../selectors/getHeroesById'

// const heroeImages = require.context('../../assets/heroes', true)

export const HeroScreen = () => {
  const { heroeId } = useParams()
  const history = useHistory()

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
  // const hero = getHeroesById(heroeId)

  if (!hero) {
    return <Redirect to="/" />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  const handleReturn = () => {
    history.length <= 2 ? history.push('/') : history.goBack()
  }

  return (
    <div className="hero-container">
      <div className="hero-image animate__animated animate__backInLeft animate__fast">
        <img
          // src={`../assets/heroes/${heroeId}.jpg`}  desde public/assets
          // src={heroeImages(`./${heroeId}.jpg`).default}
          src={loadImage(`${heroeId}.jpg`)}
          alt={`${heroeId}`}
        />
      </div>

      <div className="hero-detail animate__animated animate__backInRight animate__fast">
        <h1>{superhero}</h1>
        <ul className="list-group">
          <li>
            <b>alter_ego: </b>
            {alter_ego}
          </li>
          <li>
            <b>publisher: </b>
            {publisher}
          </li>
          <li>
            <b>first_appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h3>Character</h3>
        <br />
        <p>{characters}</p>

        <button className="btn-return" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
