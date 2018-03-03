const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let items = [
  {id: 1, task: "Go to the store", completed: false},
  {id: 2, task: "Get the milk", completed: false},
  {id: 3, task: "Bring it back", completed: false},
]
let nextId = 4

app.get('/items.json', (req, res) => res.send(JSON.stringify(items)))

app.post('/items.json', (req, res) => {
  items.push({
    id: nextId,
    task: req.body.task,
    completed: false
  })
  nextId = nextId + 1;
  res.send(JSON.stringify(items))
})

app.put('/items.json', (req, res) => {
  items.filter((item) => {
    return item.id == req.body.id
  }).forEach((item) => {
    item.completed = req.body.completed
  });
  res.send(JSON.stringify(items))
})

app.delete('/items.json', (req, res) => {
  items = items.filter((item) => {
    return item.id != req.body.id
  })
  res.send(JSON.stringify(items))
})

app.listen(3000, () => console.log('Todo app listening on port 3000!'))
