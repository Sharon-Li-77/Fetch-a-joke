import request from 'superagent'

const serverUrl = '/api/v1/'

export async function getJokeById(id: number) {
  const res = await request.get(`${serverUrl}joke/${id}`)
  return res.body
}

export async function getPunchlineById(id: number) {
  const res = await request.get(`${serverUrl}punchline/${id}`)
  return res.body
}

export async function jokeCountFromFE() {
  const res = await request.get(`${serverUrl}count`)
  return res.body
}
