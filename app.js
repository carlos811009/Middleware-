const express = require('express')
const app = express()
const port = 3000

let start = ''
let date = ''
let message = ''
app.use((req, res, next) => {
  start = Date.now()
  date = new Date()
  message = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`
  next()
})

app.get('/', (req, res) => {
  // console.log('end:', Date.now())
  res.send('列出全部 Todo')
  const end = Date.now()
  console.log(`${message} | total time: ${end - start} ms`)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  const end = Date.now()
  console.log(`${message} | total time: ${end - start} ms`)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  // const end = Date.now()
  // console.log(`${message} | total time: ${end - start} ms`)
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  const end = Date.now()
  console.log(`${message} | total time: ${end - start} ms`)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})