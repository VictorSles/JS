//Default_node_mode
const path = require(`path`)
const fs = require(`fs`) //filesystem
const sharp = require("sharp")
//Default_node_mode

const filepath = process.argv[2]
const dirname = path.dirname(filepath)
const [filename, extension] = path.basename(filepath).split(".")
const destination = `${dirname}/redimencionado`

if(!fs.existsSync(destination)){
    fs.mkdirSync(destination)
}

//sizes
// You need to install mode sharp

const sizes = [128, 48, 32, 24, 16]

sizes.forEach(size=>{
    sharp(filepath)
.clone()
.resize({width:size})
.toFile(`${destination}/${filename}-${size}.${extension}`)
.then(info=>{
    console.log(info)
}).catch(error=>{
    console.log(error)
 })
})
