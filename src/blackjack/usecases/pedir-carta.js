
/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} Retorna una carta aleatoria del deck
 */
export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) 
    throw new Error('No hay cartas en el deck');

    const carta = deck.pop();
    return carta;
}