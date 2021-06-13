const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date()
  res.send('列出全部 Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.get('/new', (req, res) => {
  const date = new Date()
  res.send('新增 Todo 頁面')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.get('/:id', (req, res) => {
  const date = new Date()
  res.send('顯示一筆 Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.post('/', (req, res) => {
  const date = new Date()
  res.send('新增一筆  Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})