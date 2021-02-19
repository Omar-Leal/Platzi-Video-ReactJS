/*  1. El primer accion se encarga de describir la informacion que vamos a a hacer y luego pasar a un objeto disponible

2. Después va a tomar la ación que estamos ejecutando para evaluar coo
lo va guardar dentro del storage de Redux
*/

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload, 
});