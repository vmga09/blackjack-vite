

// Esta función me permite tomar una carta

/**
 * 
 * @param {Array} deck Requiere un arreglo
 * @returns {Array} Retorna una carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}