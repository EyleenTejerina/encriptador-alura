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
                document.querySelector("#cadenaEncriptar").value="";
        }   

        function tildes_unicode(str){
                str = str.replace('á','a');
                str = str.replace('é','e');
                str = str.replace('í','i');
                str = str.replace('ó','o');
                str = str.replace('ú','u');
                str = str.replace('Á','A');
                str = str.replace('É','E');
                str = str.replace('Í','I');
                str = str.replace('Ó','O');
                str = str.replace('Ú','U');
                str = str.replace('ñ','Ñ');
                return str;
        }

       
        function desencriptar() {
                var texto = document.querySelector("#cadenaEncriptar");
                var cadenaTexto = texto.value;
                var textoCifrado = cadenaTexto.replaceAll(',', '');
                textoCifrado = textoCifrado.replaceAll("enter", "e");
                textoCifrado = textoCifrado.replaceAll("imes", "i");
                textoCifrado = textoCifrado.replaceAll("ai", "a");
                textoCifrado = textoCifrado.replaceAll("ober", "o");
                textoCifrado = textoCifrado.replaceAll("ufat", "u");
                (document.querySelector("#mostrartexto")).innerHTML = textoCifrado;
                texto.value = "";
        } 

        function copiarTextoEncriptado() {
                let copyText = document.querySelector("#mostrartexto");
                var cadenaResultado = document.querySelector("#cadenaEncriptar");
                copyText.select();
                document.execCommand("copy");
                cadenaResultado.focus();
        }
        document.querySelector("#copiartexto").addEventListener("click", copy);