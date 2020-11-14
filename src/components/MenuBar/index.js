import React from 'react'
import './MenuBar.css';

export default function MenuBar() {
  return (
    <div className="ui grid">
      <div className="column">
        <div className="ui menu">
          <div className="title" style={{margin: 'auto', padding: '1.5rem'}}>
            Employee Tracker
          </div>
        </div>
      </div>
    </div>
  )
}
