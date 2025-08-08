import express from 'express'
import path from 'path'
import { userRouter } from './src/routers/user'
import { userRepository } from './src/db/userRepository'

const server = express()
const PORT = 3000

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use('/css', express.static(path.join(__dirname, 'node_modules/@picocss/pico/css')))
server.set('view engine', 'ejs')
server.set('views', __dirname + '/src/views')

server.use('/users', userRouter(userRepository))

server.get('/', (_, res) => {
  return res.render('index')
})

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
