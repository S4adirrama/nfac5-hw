import { useEffect } from 'react'
import { db, ref, set } from '../services/firebase'

const FIELD_WIDTH = 800
const FIELD_HEIGHT = 600

export function usePlayerMovement(player, setPlayer) {
  useEffect(() => {
    if (!player) return

    function handleKeyDown(e) {
      let { x, y } = player
      if (e.key === 'w' || e.key === 'W') y = Math.max(0, y - 1)
      if (e.key === 's' || e.key === 'S') y = Math.min(FIELD_HEIGHT - 4, y + 1)
      if (e.key === 'a' || e.key === 'A') x = Math.max(0, x - 1)
      if (e.key === 'd' || e.key === 'D') x = Math.min(FIELD_WIDTH - 4, x + 1)
      if (x !== player.x || y !== player.y) {
        setPlayer({ ...player, x, y })
        set(ref(db, `players/${player.id}`), { ...player, x, y })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [player, setPlayer])
}