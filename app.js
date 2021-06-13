const express = require('express')
const app = express()
const port = 3000
const date = new Date()
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})