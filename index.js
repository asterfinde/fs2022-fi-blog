/**
 * Start the application importing the actual application from the app.js 
 * 
 */

//~
import app from './app.js'              // the actual Express app
import http from 'http'
import config from './utils/config.js'
import logger from './utils/logger.js'

//
const server = http.createServer( app )

server.listen( config.PORT, () => {
    logger.info( `>>>>>>>>>>>> server running on port ${config.PORT}` )
})
