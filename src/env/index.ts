import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'teste') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid Enviroment Variables!', _env.error.format())
  throw new Error('Invalid Enviroment Variables')
}

export const env = _env.data
