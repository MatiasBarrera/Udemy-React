import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router'
import useForm from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../selectors/getHeroesByName'

export const SearchScreen = () => {
  const history = useHistory()
  const { search } = useLocation()

  const { q = '' } = queryString.parse(search)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
  // const heroesFiltered = getHeroesByName(searchText)

  const handleSearch = e => {
    e.preventDefault()
    history.push(`?q=${searchText}`)

    // reset()
  }

  return (
    <>
      <h1>Search Screen</h1>
      <div className="search-container">
        <div className="search-form">
          <h4>Search Form: </h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />

            <button type="submit">🔍</button>
          </form>
        </div>
        <br />
        <h4>Results: </h4>
        <br />
        <div className="search-result">
          {q === '' && <div className="alert alert-info">Search a hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with: {q}
            </div>
          )}
          {heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
