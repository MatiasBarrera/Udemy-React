import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440)'
        }}></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>2</h4>
      </div>
    </div>
  )
}
