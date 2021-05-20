const express = require('express')
const request = require('request-promise')

const app = express()

const port = 4001

app.get('/docker2', (req, res) =>{
    res.send('I am trying this out in kubernetes')
})

app.get('/test', (req, res) =>{
    res.send('I am the request coming from docker practice 2... Yes Bee!')
})

// Testing from docker 1 file
app.get('/from1', async (req, res) => {
    const fromDockerOne = await request({
        method: 'GET',
        url: 'http://docker-practice-clusterip-srv:4000/docker1',
        json: true
    })
    res.send(fromDockerOne)
})

app.listen(port, () => {
    console.log("I am the latest version!")
    console.log(`Server listening on port ${port}`)
})