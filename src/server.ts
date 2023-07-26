import { table } from 'console'
import { randomUUID } from 'crypto'
import fastify from 'fastify'
import { env } from './env'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  // const tables = await knex('sqlite_schema').select('*')

  // const transaction = await knex('transactions')
  //   .insert({
  //     id: randomUUID(),
  //     title: 'Transação de Teste',
  //     amount: 1000,
  //   })
  //   .returning('*')

  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
