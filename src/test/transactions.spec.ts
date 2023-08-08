import { it, test, beforeAll, afterAll, describe } from 'vitest'
import { createServer } from 'node:http'
import request from 'supertest'
import { app } from '../app'

describe('Trnsactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })
})
