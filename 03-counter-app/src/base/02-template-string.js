


// const nombre   = 'Fernando';
// const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'carlos', apellido) {
    return `Hola ${nombre} ${apellido || ''}`;
}

// console.log( `Este es un texto: ${ getSaludo( nombreCompleto ) }` );