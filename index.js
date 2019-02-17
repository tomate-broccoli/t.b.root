// index.js
const root = (()=>{
    let initialized = false
    let root
    return dirname=>{
        if(!initialized){
            initialized = true
            root = dirname || process.cwd()
	}
        return root
    }
})()

module.exports = root


if(module.parent) return

// sample
const samp = require('./index.js')
console.log(`** 1: ${samp('/foo/bar')}.`)
console.log(`** 2: ${samp(__dirname)}.`)
console.log(`** 3: ${samp()}.`)
