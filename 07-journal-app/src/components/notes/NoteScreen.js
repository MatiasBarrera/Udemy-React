import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="note__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
          autoComplete="off"></textarea>
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  )
}
