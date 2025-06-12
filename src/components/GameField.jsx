import React from 'react'

export default function GameField({ players }) {
  return (
    <div
      style={{
        position: 'relative',
        width: 800,
        height: 600,
        background: '#222',
        border: '2px solid #555',
        margin: 20,
      }}
    >
      {players.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: 20,
            height: 20,
            background: p.color,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 12,
            border: '1px solid #000',
          }}
          title={p.name}
        >
          {p.name[0]}
        </div>
      ))}
    </div>
  )
}