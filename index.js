const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/webhooks/github', (req, res) => {
  const branch = req.body.ref

  console.log('BRANCH', branch)

  res.send('hello world')
})

app.listen(port, () => console.log('running app, listening on port', port))
