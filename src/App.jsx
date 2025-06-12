import { useState, useEffect } from 'react'
import { useRealtimePlayers } from './hooks/useRealtimePlayers.js'
import { usePlayerMovement } from './hooks/usePlayerMovement.js'
import { db, ref, set, remove } from './services/firebase.js'
import GameField from './components/GameField.jsx'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export default function App() {
  const [player, setPlayer] = useState(null)
  const players = useRealtimePlayers()

  usePlayerMovement(player, setPlayer)

  useEffect(() => {
    if (!player) {
      const id = crypto.randomUUID()
      const color = getRandomColor()
      const name = prompt('Ваш ник?') || 'Игрок'
      const x = 400, y = 300
      const newPlayer = { id, x, y, color, name }
      setPlayer(newPlayer)
      set(ref(db, `players/${id}`), newPlayer)
      // Удаляем из БД при выходе
      window.addEventListener('beforeunload', () => {
        remove(ref(db, `players/${id}`))
      })
    }
  }, [player])

  if (!player) return null

  return (
    <div className="flex flex-col items-center">
      <GameField players={players} />
    </div>
  )
}