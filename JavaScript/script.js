

let encriptarButton = document.getElementById("encriptar");
let descifrarButton = document.getElementById("descifrar");
let texto = document.getElementById("texto");
let answer = document.getElementById("answer");
let warning = document.getElementsByClassName("help");
let button = document.getElementById("answer-button");
let contenedor = document.getElementsByClassName("answer");




const palabras = ["ai", "enter","imes", "ober", "ufat" ];
const remplazo = ["a", "e", "i", "o", "ufat"]; 

encriptarButton.addEventListener("click", encriptar);
descifrarButton.addEventListener("click", descifrar);
button.addEventListener("click", copiarTexto);
texto.addEventListener("input", agrandar);

function agrandar(){
    // texto.style.height = "auto"; // Restablecer la altura a 'auto' para obtener la altura del contenido
    texto.style.height = texto.scrollHeight + "px"; 
    
}

function aparicionRespuesta(){
    button.style.display = "block";
    answer.style.display = "block";
    contenedor[0].style.justifyContent = "center";
}

function desaparicionRespuesta(){
    button.style.display = "none";
    answer.style.display = "none";
}

function desaparacionAlertas(){
   for (let i = 0; i < warning.length; i++) {
    warning[i].style.display = "none";
    
   }
   
}
function apareicionAlertas(){
    for (let i = 0; i < warning.length; i++) {
        warning[i].style.display = "block";
    }
    contenedor[0].style.justifyContent = "spacen-between";
}


function encriptar(){
    var text = texto.value.split('');
    console.log(text);
    if(text != ""){
        console.log("hppña");
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
        // desaparacionAlertas();
        var nuevo = text.join('');
        answer.textContent = nuevo;
        desaparacionAlertas();
        aparicionRespuesta();
        console.log(nuevo);
        
    }else{
        desaparicionRespuesta();
        apareicionAlertas();
    }
}

function descifrar(){
    var text =  texto.value;
    
    if (text != "") {
        
        var separado;
        for(var i = 0; i < palabras.length; i++){
            separado = text.split(palabras[i]);
            if(separado.length > 1){
                text = separado.join(remplazo[i]);
            }
        }
        
        answer.textContent = text;
        desaparacionAlertas();
        aparicionRespuesta();
    } else {
        desaparicionRespuesta();
        apareicionAlertas();
    }
}

function copiarTexto() {
    var range = document.createRange();
    range.selectNode(answer);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + answer.textContent);
}

