const fs = require('fs')

fs.watch('target.txt', () =>{
  console.log("File 'target.txt' just changed!")
}
)
console.log("Now watching target.txt for changes  ...")
