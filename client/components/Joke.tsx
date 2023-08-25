import { useState } from 'react'
import { getPunchlineById } from '../apiClient'

interface Props {
  state: number
  joke: string
  setState: React.Dispatch<React.SetStateAction<number>>
}

function Joke(props: Props) {
  async function handleClick() {
    props.setState(props.state + 1)
  }

  return (
    <>
      <h1>{props.joke}</h1>
      <div>
        <img src="/images/joke-component-image.jpeg" alt="dad joke"></img>
        <button onClick={handleClick}>reveal punchline</button>
      </div>
    </>
  )
}

export default Joke
