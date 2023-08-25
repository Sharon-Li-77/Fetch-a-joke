import express from 'express'
import * as db from '../db/db'

//GET route for sever to get data

const router = express.Router()

router.get('/joke/:id', async (req, res) => {
  try {
    const theJoke = await db.getJoke(Number(req.params.id))
    // console.log(theJoke)
    res.json(theJoke)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

router.get('/punchline/:id', async (req, res) => {
  try {
    const thePunchLine = await db.getPunchLine(Number(req.params.id))
    res.json(thePunchLine)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

router.get('/count', async (req, res) => {
  try {
    const data = await db.countJokes()
    if (data) res.json(data.count)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
