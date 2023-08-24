import { getPunchlineById } from '../apiClient'

interface Props {
  state: number
}

function Joke(props: Props) {
  // const number= [0,1,2,3,4 ]
  console.log(props.state)
  async function handleClick(id: number) {
    const number = props.state + 1
    await getPunchlineById(number)
  }

  return (
    <>
      <h1>Joke goes here</h1>
      <div>
        <img
          src="../public/images/joke-component-image.jpeg"
          alt="dad joke"
        ></img>
        <button onClick={handleClick(props.state)}>reveal punchline</button>
      </div>
    </>
  )
}

export default Joke
