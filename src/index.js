import express from 'express'
import config  from './utils/config'



const app = express()

const { port } = config

app.get('/', (req, res) => {
res.send({msg:'Hello Everyone in the world!'})    
})

app.listen(config.port)