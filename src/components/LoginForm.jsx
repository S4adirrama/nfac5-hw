import React, { useState } from 'react'

export default function LoginForm({ onLogin }) {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (name.trim()) {
      onLogin(name.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <input
        type="text"
        placeholder="Ваш ник"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Войти
      </button>
    </form>
  )
}