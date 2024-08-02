import { swaggerUI } from '@hono/swagger-ui'
import { Hono } from 'hono'

const app = new Hono()

app.get('/ui', swaggerUI({ url: '/doc', version: '3.0.0' }))


app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.get('/:name', (c) => {
  console.log(c.req.param)
  return c.text(`Hello ${c.req.param('name')}!`)
})

app.get('/:name/:age', (c) => {
  return c.text(`Hello ${c.req.param("name")} ${c.req.param("age")}!`)
})

export default app
