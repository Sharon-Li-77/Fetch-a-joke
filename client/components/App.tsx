import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import Punchline from './Punchline.tsx'
import Joke from './Joke.tsx'
function App() {
  //TODO Use state to show which page
  //-------
  const [state, setState] = useState(0)

  return (
    <div>
      <h1>This is the home page</h1>
      {state % 2 == 1 && <Joke />}
      {state % 2 == 0 && <Punchline />}
    </div>
  )
}

export default App
