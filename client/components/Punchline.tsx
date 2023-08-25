import { useEffect, useState } from 'react'
import { getPunchlineById, jokeCountFromFE } from '../apiClient'

interface Props {
  id: number
  setId: React.Dispatch<React.SetStateAction<number>>
  setDisplay: React.Dispatch<React.SetStateAction<string>>
}

function Punchline(props: Props) {
  const [punchline, setPunchline] = useState('')
  async function loadPunchLine(id: number) {
    const data = await getPunchlineById(id)
    setPunchline(data.punchLine)
  }
  useEffect(() => {
    loadPunchLine(props.id)
  }, [])

  async function handleClick() {
    const numberOfJokes = await jokeCountFromFE()
    if (numberOfJokes > props.id) {
      props.setId(props.id + 1)
      props.setDisplay('joke')
    } else {
      props.setId(1)
      props.setDisplay('joke')
    }
  }

  return (
    <>
      <h1>{punchline}</h1>
      <div className="image-container">
        <img src="/images/joke-component-image.png" alt="dad joke"></img>
      </div>
      <div>
        <button className="button" onClick={handleClick}>
          <em>Fetch a new Joke</em>
        </button>
      </div>
    </>
  )
}
export default Punchline
