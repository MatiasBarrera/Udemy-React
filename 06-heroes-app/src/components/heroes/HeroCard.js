/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import { Link } from 'react-router-dom'
import { loadImage } from '../../helpers/heroImages'

// const heroeImages = require.context('../../assets/heroes', true)

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <div className="card animate__fadeIn animate__animated animate__fast">
      <div>
        <img
          // src={`./assets/heroes/${id}.jpg`}
          // src={heroeImages(`./${id}.jpg`).default}
          src={loadImage(`${id}.jpg`)}
          className="card-img"
          alt={superhero}
        />
      </div>
      <div className="card-body">
        <h5>{superhero}</h5>
        <p className="card-text">{alter_ego}</p>
        {alter_ego !== characters && <p className="card-text">{characters}</p>}
        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>
        <Link className="link" to={`./hero/${id}`}>
          Mas...
        </Link>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string
}
