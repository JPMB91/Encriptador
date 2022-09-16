const inputTexto = document.querySelector(".input_texto"); //creamos una variable para recibir la clase que recibe el texto ingresado
const mensaje = document.querySelector(".mensaje");  //vincula al campo textarea .mensaje
const boton_copiar = document.querySelector(".copiar");
const areaTexto = document.getElementById("areaTexto"); //AAAAAH no se como hacerlo


//botón encriptar
function boton_encriptar(){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value=textoEncriptado; //esto hace link entre el textarea .mensaje y el texto resultado de la función encriptar
    mensaje.style.backgroundImage="none"; //esto esconde la imagen al llamar la funcion del boton_encriptar
    inputTexto.value=""; //esto limpia el textarea "mensaje"
}


//funcion encriptar texto
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

// botón desencriptar

function boton_desencriptar(){
    const textoEncriptado=desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage="none"
    inputTexto.value="";
}

//funcion desencriptar
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }     
    }
    return stringDesencriptada;
}

//funcion botón copiar

function copiar(){  
    mensaje.select(); //seleciona el campo de mensaje
    navigator.clipboard.writeText(mensaje.value) //esta interface permite copiar al clipboard, en este caso el value del textarea mensaje
    mensaje.value = ""; //limpia el texarea luego de copiar
    alert("El texto fue copiado")
}





