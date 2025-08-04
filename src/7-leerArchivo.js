const fs = require('fs')

fs.readFile('./personajes.txt', 'UTF8', (err, data)=>{
    if(err){
        console.error('Hubo un error al leer el archivo: ', err)
        return;
    }

    console.log('Contenido del archivo:')
    console.log(data)
})

console.log('📌 Este mensaje va despues de leer el archivo')