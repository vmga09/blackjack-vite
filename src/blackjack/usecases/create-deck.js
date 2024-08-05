import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 * Esta función crea un arreglo, un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} Retorna un  deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales ) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tipos de carta es obligatorio como arreglo de string');   
    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        console.log(tiposDeCarta)
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}