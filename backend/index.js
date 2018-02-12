'use strict'

const express = require('express')
const mysql = require('mysql')

const app = express()

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
}

app.use(cors)
app.listen(3000)

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'kolina',
  database: 'kolina'
}

const connection = mysql.createConnection(dbOptions)

const query = (qs, param='') =>
  new Promise(resolve => {
    connection.query(qs, [param], (err, rows) => {
      resolve(rows)
    })
  })

const Mock = {
  labels: new Promise(resolve => resolve([
    { name: 'Application', issues: { open: 5, closed: 3, total: 8 } },
    { name: 'Order', issues: { open: 5, closed: 3, total: 8 } },
    { name: 'User', issues: { open: 8, closed: 5, total: 13 } }
  ])),
  milestones: new Promise(resolve => resolve([
    { name: 'Coupon', issues: { open: 13, closed: 8, total: 21 } },
    { name: 'Roles', issues: { open: 2, closed: 1, total: 3 } },
    { name: 'I18n', issues: { open: 1 , closed: 1, total: 2 } }
  ]))
}

const handler = {
  list: d => (req, res) => d.then(x => res.json(x)),
  single: d => (req, res) => d.then(x => res.json(x[req.params.id]))
}

app.get('/metrics/labels', handler.list(Mock.labels))
app.get('/metrics/milestones', handler.list(Mock.milestones))
app.get('/users', handler.list(query('SELECT * FROM app_users')))

app.get('/users/:id', (req, res) => {
  query('SELECT * FORM app_user IF ID=?', req.params.id)
    .then(user => res.json(user))
})
