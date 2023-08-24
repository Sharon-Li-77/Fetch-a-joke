import { useState, useEffect } from 'react'
import Punchline from './Punchline.tsx'
import Joke from './Joke.tsx'
function App() {
  //TODO Use state to show which page
  //-------
  const [state, setState] = useState(1)

  return (
    <div>
      <h1>This is the home page</h1>
      {state % 2 == 1 && <Joke state={state} />}
      {state % 2 == 0 && <Punchline />}
    </div>
  )
}

export default App
