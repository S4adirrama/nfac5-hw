import React from 'react'

export default function PlayerList({ players }) {
  return (
    <ul className="player-list">
      {players.map(p => (
        <li key={p.id} style={{ color: p.color }}>
          {p.name} ({p.x}, {p.y})
        </li>
      ))}
    </ul>
  )
}