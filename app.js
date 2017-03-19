const express = require('express')
const app = express()

const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000, () => {
  console.log('Example app listenling on port 3000!')

})

