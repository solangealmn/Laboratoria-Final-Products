function cipher(){
  //Obter o valor dos campos;
  var texto = prompt("Introduza a frase:").toUpperCase();
  console.log(texto);
  //Obter a posição numérica de cada letra;
  function converte(texto) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var indices = [];
    for (var i in texto) {
      indices.push(alfabeto.indexOf(texto[i].toUpperCase()));
    }
    return indices;
  }
  var position = converte(texto);
  var codAscii = [];
  for (var i in position) {
    codAscii.push(position[i] + 65 + 7 % 26);
  }
  var criptTexto = String.charCodeAt(codAscii);
  return criptTexto;
}
cipher();
