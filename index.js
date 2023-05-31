const textarea=document.querySelector(".texto-1");
const codigo=document.querySelector(".texto2");

const matrizCodigo=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]
function btnEncriptar(){
    const textEncriptado=encriptar(textarea.value);

    codigo.value=textEncriptado;
    textarea.value="";
}
function btnDesencriptar(){
    const textDesencriptado=desencriptar(textarea.value);

    codigo.value=textDesencriptado;
    textarea.value="";
}
function encriptar(textoEncriptar){
    quitarBKG();
    textoEncriptar=textoEncriptar.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncriptar.includes(matrizCodigo[i][0])){
            textoEncriptar=textoEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoEncriptar;
}
function desencriptar(textoDesencriptar){
    textoDesencriptar=textoDesencriptar.toLowerCase();
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptar.includes(matrizCodigo[i][1])){
            textoDesencriptar=textoDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoDesencriptar;
}
function quitarBKG(){
    let fondo=document.getElementById("texto2");
    fondo.style.backgroundImage="none";
}
function copiar(){
    const textCopiar=codigo.value;
    navigator.clipboard.writeText(textCopiar);
    const limpiar=codigo.value="";
    agregarBKG()
}
function agregarBKG(){
    let fondo=document.getElementById("texto2");
    fondo.style.backgroundImage="url(img/munieco.svg)";
}
