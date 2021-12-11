import React from 'react'
import { useDispatch } from 'react-redux'
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth'

export const Sidebar = () => {
  const dispatch = useDispatch()
  const handlerLogout = () => {
    dispatch(startLogout())
  }
  return (
    <aside className="journal__sidebar ">
      <div className="journal__sidebar-navbar">
        <i className="far fa-moon" />
        <h3>Matias</h3>
        <button onClick={handlerLogout}>Logout</button>
      </div>
      <hr />
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x" />
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
