import express from 'express'
import config  from './utils/config'
import logger from './utils/logger'



const app = express()

const { port } = config
app.use(logger.middleware)
app.get('/', (req, res) => {
    logger.log.success('Calling Root')
res.send({msg:'Hello Everyone in the world!'})    
})

app.listen(config.port)