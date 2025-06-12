import { useEffect, useState } from 'react'
import { db, ref, onChildAdded, onChildChanged, onChildRemoved } from '../services/firebase'

export function useRealtimePlayers() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const playersRef = ref(db, 'players')
    const playersMap = {}

    function addPlayer(snapshot) {
      const player = snapshot.val()
      playersMap[player.id] = player
      setPlayers(Object.values(playersMap))
    }
    function changePlayer(snapshot) {
      const player = snapshot.val()
      playersMap[player.id] = player
      setPlayers(Object.values(playersMap))
    }
    function removePlayer(snapshot) {
      const player = snapshot.val()
      delete playersMap[player.id]
      setPlayers(Object.values(playersMap))
    }

    const unsubAdd = onChildAdded(playersRef, addPlayer)
    const unsubChange = onChildChanged(playersRef, changePlayer)
    const unsubRemove = onChildRemoved(playersRef, removePlayer)

    return () => {
      unsubAdd()
      unsubChange()
      unsubRemove()
    }
  }, [])

  return players
}