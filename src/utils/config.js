import dotenv from 'dotenv'
import joi from 'joi'

import logger from './logger'

dotenv.config()

const evnSchema = joi.object().keys ({
    NODE_ENV: joi.string().valid('development', 'production')
    .required(), 
    PORT: joi.number().positive().required()
})
.unknown()

const { value: env, error } = evnSchema.prefs({errors: { label:'key' } }).validate(process.env)

if (error) {
    logger.log.error(new Error(`Config validation error: ${error.message}`))
  }

export default {nodeENV: env.NODE_ENV, port: env.PORT }