const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`======tabla de ${base}=======`.green);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}