
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');
console.clear();

//console.log(process.argv);
console.log(argv);



// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=')
//console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'Creado') )
    .catch( err => console.log(err));