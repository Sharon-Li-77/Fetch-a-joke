import connection from './connection.ts'
import { Dadjoke } from '../../Models/Dadjoke.ts'

//Function to get Joke by id
export function getJoke(id: number, db = connection) {
  return db<Dadjoke>('jokes').where('id', id).select('joke')
}

//Function to get Punchline by id
export function getPunchLine(id: number, db = connection) {
  return db<Dadjoke>('jokes').where('id', id).select('punchLine')
}
