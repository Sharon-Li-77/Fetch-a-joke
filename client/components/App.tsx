import { useState, useEffect } from 'react'
import Punchline from './Punchline.tsx'
import Joke from './Joke.tsx'
import { getJokeById } from '../apiClient.ts'

function App() {
  const [id, setId] = useState(1)

  const [display, setDisplay] = useState('joke')

  return (
    <div>
      <h1>This is the home page</h1>

      {display == 'joke' && <Joke id={id} setDisplay={setDisplay} />}
      {display == 'punchline' && (
        <Punchline id={id} setId={setId} setDisplay={setDisplay} />
      )}
    </div>
  )
}

export default App
