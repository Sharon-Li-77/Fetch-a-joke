import { useEffect, useState } from 'react'
import { getPunchlineById } from '../apiClient'
import { getJokeById } from '../apiClient'
interface Props {
  id: number
  setDisplay: React.Dispatch<React.SetStateAction<string>>
}

function Joke(props: Props) {
  const [state, setState] = useState('')
  async function loadJoke(id: number) {
    const data = await getJokeById(id)
    console.log(data)
    setState(data.joke)
  }
  useEffect(() => {
    loadJoke(props.id)
  }, [])
  function handleClick() {
    props.setDisplay('punchline')
  }
  return (
    <>
      <h1>{state}</h1>
      <div className="image-container">
        <img src="/images/joke-component-image.png" alt="dad joke"></img>
      </div>
      <div>
        <button className="button" onClick={handleClick}>
          <em>Reveal punchline</em>
        </button>
      </div>
    </>
  )
}

export default Joke
