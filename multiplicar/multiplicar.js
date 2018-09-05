// requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = async(base, limite=10) => {
    let data = '';

    console.log('===================='.green);
    console.log(`== tabla de ${base}`.green);
    console.log('===================='.green);
    if(!Number(base) || !Number(limite)){
        throw new Error('Tiene que ser un numero')
    }
    for( let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base * i}\n`
    }
    return data;
}
let crearArchivo = async(base, limite=10) => {
    let data = '';
    if(!Number(base) || !Number(limite)){
        throw new Error('Tiene que ser un numero')
    }

    for( let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base * i}\n`
    }
    
    fs.writeFile('tablas/tabla-'+base+'.txt', data, (err) => {
        if (err) throw new Error (err);
        console.log(data);
        
    });

    return `tabla-${base}.txt`
    
    
}

module.exports = {
    crearArchivo,
    listarTabla
}


