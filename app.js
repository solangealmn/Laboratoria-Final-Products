  //Encriptar texto (cipher)
  function cipher(){
    //Obter o valor dos campos;
    var textoNormal = document.getElementById('cipher-entrance').value.toUpperCase();
    //Obter a posição de cada letra;
    function getCodAscii(textoNormal){
      var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var codAscii = [];
      for(var i in textoNormal){
        codAscii.push(alphabet.indexOf(textoNormal[i].toUpperCase()));
      }
      return codAscii;
      //console.log(codAscii);
    }
    var position = getCodAscii(textoNormal);
    for (var i in position) {

        //console.log(position[i]);
    }

    //Converter o códico ASCII de cada letra à posição dessa mesma letra no alfabeto;

    //Aplicar a fórmula (x + n) % 26, onde "x" é a posição da letra e "n = 7" porque é o número de deslocamentos que farei para cada letra;

    //validar o valor dos campos;
    if(textoNormal[i] != ' '){
      for (var charactere = -1; charactere < alfa.length; j++){
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
