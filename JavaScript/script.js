

let encriptarButton = document.getElementById("encriptar");
let descifrarButton = document.getElementById("descifrar");
let texto = document.getElementById("texto");

const palabras = ["ai", "enter","imes", "ober", "ufat" ];
const remplazo = ["a", "e", "i", "o", "ufat"]; 

encriptarButton.addEventListener("click", encriptar);
descifrarButton.addEventListener("click", descifrar);

function hola(){
    alert(texto.value);
}


function encriptar(){
    var text = texto.value.split('');
    console.log(text);
    for(var i = 0; i < text.length; i++){
        if(text[i] == 'a'){
            text[i] = "ai";
        }
        else if(text[i] == 'e'){
            text[i] = "enter";

        }else if(text[i] == 'i'){
            text[i] = "imes";
        }else if(text[i] == 'o'){
            text[i] = "ober";
        }
        else if(text[i] == 'u'){
            text[i] = "ufat";
        }
    }
    var nuevo = text.join('');
    console.log(nuevo);

}

function descifrar(){
    var text =  texto.value;

    var separado;
    for(var i = 0; i < palabras.length; i++){
        separado = text.split(palabras[i]);
        if(separado.length > 1){
            text = separado.join(remplazo[i]);
            
        }

    }
    console.log(text);

}

