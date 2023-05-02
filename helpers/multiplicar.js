const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try{
        let salida = ''; 
        let consola = '';
        if (listar){
            console.log('=================='.green);
            console.log('   Tabla del: '.green, colors.blue(base));
            console.log('=================='.green);

            for (let i = 1; i <= hasta; i++){
                salida += `${base} X ${i} = ${base*i}\n`;
                consola += `${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
            }

            console.log(consola);

            fs.writeFileSync(`tabla-${base}.txt`, salida); // guardar el archivo
        }
        

        return `tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
    
    
}

module.exports = {
    crearArchivo
}