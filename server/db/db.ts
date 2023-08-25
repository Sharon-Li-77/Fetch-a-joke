import connection from './connection.ts'
import { Dadjoke } from '../../Models/Dadjoke.ts'

//Function to get Joke by id
export function getJoke(id: number, db = connection): Promise<string> {
  return db<Dadjoke>('jokes').where('id', id).select('joke').first()
}

//Function to get Punchline by id
export function getPunchLine(id: number, db = connection): Promise<string> {
  return db<Dadjoke>('jokes').where('id', id).select('punchLine').first()
}
