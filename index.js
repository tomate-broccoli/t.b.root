// index.js
const f = (()=>{
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
modudle.exports = f
