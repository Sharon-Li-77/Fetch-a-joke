import { useState, useEffect } from 'react'
import Punchline from './Punchline.tsx'
import Joke from './Joke.tsx'
import { getJokeById } from '../apiClient.ts'

function App() {
  //TODO Use state to show which page
  //-------
  const [state, setState] = useState(1)
  const [joke, setJoke] = useState('')

  async function loadJoke(id: number) {
    const data = await getJokeById(id)
    setJoke(data.joke)
  }
  useEffect(() => {
    loadJoke(state)
  }, [])

  return (
    <div>
      <h1>This is the home page</h1>

      {state % 2 == 1 && <Joke joke={joke} state={state} setState={setState} />}
      {state % 2 == 0 && <Punchline state={state} setState={setState} />}
    </div>
  )
}

export default App
