function ocultarEncriptador() {
        
    document.getElementById("ocultar").style.visibility = "visible"; 
    document.getElementById("mostrar").style.visibility = "hidden";               

}
function ocultarDiv(){
document.getElementById("ocultar").style.visibility = "hidden";
document.getElementById("mostrar").style.visibility = "visible"; 
}

function encriptar(){
ocultarDiv();
var cadenaUsuario = document.querySelector("#cadenaEncriptar").value;
//validaciones
cadenaUsuario = tildes_unicode(cadenaUsuario);
cadenaUsuario = cadenaUsuario.toLowerCase();
console.log("Cadena depurada " , cadenaUsuario);

var fraseEncriptar = cadenaUsuario.split('');

for(var i = 0; i <= fraseEncriptar.length; i ++){
    if(fraseEncriptar[i] == "a"){
            fraseEncriptar[i]= "ai";
            
    }

    if(fraseEncriptar[i] == "e"){
            fraseEncriptar[i]= "enter";
            
    }

    if(fraseEncriptar[i] == "i"){
            fraseEncriptar[i]= "imes";
            
    }

    if(fraseEncriptar[i] == "o"){
            fraseEncriptar[i]= "ober";
           
    }

    if(fraseEncriptar[i] == "u"){
            fraseEncriptar[i]= "ufat";
            
    }
   

}
(document.querySelector("#mostrartexto")).innerHTML= fraseEncriptar;

cadenaEncriptar.value="";


}   

function tildes_unicode(str){
str = str.replace('á','a');
str = str.replace('é','e');
str = str.replace('í','i');
str = str.replace('ó','o');
str = str.replace('ú','u');
console.log(str);

str = str.replace('Á','A');
str = str.replace('É','E');
str = str.replace('Í','I');
str = str.replace('Ó','O');
str = str.replace('Ú','U');

str = str.replace('ñ','Ñ');

return str;
}
function desencriptar(){
       
        var texto = document.querySelector("#cadenaEncriptar").value;
        
          
        for(var i = 0; i <= texto.length; i ++){
                var textoCifrado = texto.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u");
                document.querySelector("#mostrartexto").value = textoCifrado.replaceAll(",", "") ;
                document.querySelector("#cadenaEncriptar").value;
        
        }
        
        (document.querySelector("#mostrartexto")).innerHTML= textoCifrado;
        console.log("frase desencriptada" + textoCifrado);
        
        cadenaEncriptar.value="";
        
        
        }   



 

function copiarTextoEncriptado() {
     let copyText = document.querySelector("#mostrartexto");
     copyText.select();
     document.execCommand("copy");
     cadenaEncriptar.focus();
}

document.querySelector("#copiartexto").addEventListener("click", copy);