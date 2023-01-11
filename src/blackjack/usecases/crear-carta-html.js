
/**
 * 
 * @param {String} carta 
 * @param {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}