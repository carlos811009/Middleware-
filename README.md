# Middleware-

## 伺服器接收請求紀錄
熟悉middleware 並在路由上加入時間戳

![image](https://github.com/carlos811009/Middleware-/blob/master/%E6%88%AA%E5%9C%96%202021-06-13%2018.36.50.png)


# 待解決問題

### 如果我使用:
app.use((req, res, next) => {
  start = Date.now()
  date = new Date()
  message = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${req.method} from ${req.originalUrl}`
  console.log(`${message}`}
  next()
})

### server回應會多出一條

2021-6-13 21:21:35 | GET from /favicon.ico



## 伺服器回應時間

（不小心將記錄洗掉了）
添加伺服器總共回應的（毫秒）
![image(https://github.com/carlos811009/Middleware-/blob/master/%E6%88%AA%E5%9C%96%202021-06-13%2021.22.51.png)

# 待解決問題
如果我使用:
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  const end = Date.now()
  console.log(`${message} | total time: ${end - start} ms`)
})

### server 回應也會多出一個

2021-6-13 21:21:35 | GET from /favicon.ico | total time: 1 ms
