const express = require('express')
const bodyParse = require('body-parser')
const app = express()


app.use(bodyParse.json())

const map = new Map()

app.post('/', (req,res) => {
    if(req.body && req.body.data && req.body.data.id){
        map.set(req.body.data.id, (map.get(req.body.data.id) || 0) + 1)
    }
    console.log("Chegou -> ",req.body)
    res.sendStatus(200)
})


app.get('/', (req,res) => {
    console.log(map.size)
    const arr = [] 
    map.forEach((value, key) => arr.push({key, value}))

    return res.send(arr.sort((a,b) => b.value - a.value ))
})
app.listen(4321, () => {
    console.log("servidor rodando na porta 4321")
})