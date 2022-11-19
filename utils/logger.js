/**
 * - Module used for the console printout:
 * • info
 * • error
 * 
 * - with sugnature: @param  {...any} params 
 * - does not print to the console in test mode
 * 
 */

//~
const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') { 
        console.log(...params)
    }
}
  
  const error = (...params) => {
    if (process.env.NODE_ENV !== 'test') { 
        console.error(...params)
    }
}

export default {
    info, error
}