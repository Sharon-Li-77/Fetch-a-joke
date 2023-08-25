import { useState } from 'react'
import { getPunchlineById } from '../apiClient'

interface Props {
  state: number
  setState: React.Dispatch<React.SetStateAction<number>>
}

function Punchline(props: Props) {
  const [punchline, setPunchline] = useState('')

  async function loadPunchline(id: number) {
    const data = await getPunchlineById(id)
    setPunchline(data.punchLine)
  }
  loadPunchline(1)

  return <p>{punchline}</p>
}
export default Punchline
