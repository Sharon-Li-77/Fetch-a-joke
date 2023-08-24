import request from 'superagent'

const serverUrl = '/api/v1/'

export async function getJokeById(id: number) {
  return await request.get(`${serverUrl}joke/${id}`)
}

export async function getPunchlineById(id: number) {
  return await request.get(`${serverUrl}punchline/${id}`)
}
