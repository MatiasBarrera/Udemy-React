import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifts(category)
  return (
    <>
      <h3 className="animate__animated animate__bounceIn">{category}</h3>

      {loading && <p className="animate__animated flash">Loading</p>}

      <div className="card-grid">
        {images.map(img => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
