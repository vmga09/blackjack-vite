
/**
 * 
 * @param {String} carta Debe ser un arreglo de string
 * @returns {Number} valor , retorna un numero entero 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
