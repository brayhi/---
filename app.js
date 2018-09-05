const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
// console.log(argv)
let comando = argv._[0];
switch( comando ) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(resultado))
            .catch(e => console.log(e))
    break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e))
    break;
    default:
        console.log('Comando no found');

}
// console.log( process.argv );
let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.base);

