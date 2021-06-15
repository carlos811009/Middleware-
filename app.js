const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  let start = new Date()

  // console.log('-------------')
  res.on('finish', () => {
    let end = new Date()
    let message = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()} ${start.getHours()}:${start.getMinutes()}:${start.getSeconds()} | ${req.method} from ${req.originalUrl}`
    console.log(`${message} | total time: ${end - start} ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')

})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')

})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})