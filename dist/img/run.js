const fs = require('fs')
fs.readdir(__dirname,(err,files)=>{
    if(err){
        console.log(err)
    }
    fs.readFile('r.txt',JSON.stringify(files),e=>{
        if(e) console.log(e)
    })
})