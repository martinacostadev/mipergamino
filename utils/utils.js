export function formatDate(date) {
  var options = { day: 'numeric', month: 'numeric', year: 'numeric' };

  return new Date(date).toLocaleDateString("es-ES", options); // 17/09/2020
}

export function formatTextToPlaceInURL(text){
  //Remplaza los espacios por %20
  return text.replace(/ /g, "%20");
}