  //Encriptar texto (cipher)
  function cipher(){
    //Obter o valor dos campos;
    var textoNormal = document.getElementById('cipher-entrance').value.toUpperCase();
    //Obter a posição de cada letra;
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function getNumberPosition(textoNormal){
      var numberPosition = [];
      for(var i in textoNormal){
        numberPosition.push(alphabet.indexOf(textoNormal[i].toUpperCase()));
      }
      return numberPosition;
      //console.log(codAscii);
    }
    var position = getNumberPosition(textoNormal);
    for (var i in position) {

        console.log(position[i] + 65);
    }

    //Converter o códico ASCII de cada letra à posição dessa mesma letra no alfabeto;

    //Aplicar a fórmula (x + n) % 26, onde "x" é a posição da letra e "n = 7" porque é o número de deslocamentos que farei para cada letra;

    //validar o valor dos campos;
    if(textoNormal[i] != ' '){
      for (var charactere = -1; charactere < alphabet.length; i++){
      }
    }




    //transformar a variável texto normal em textoEncriptado
    for(var i = 0; i < textoNormal.length; i++){

    }
    var textoEncriptado = document.getElementById('cipher-exit').innerHTML;
    }

  //Decriptar texto (decipher)
  function decipher(){

    }
