import emitirTextoEditor from "./socket-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";


textoEditor.addEventListener("keyup",()=>{
    emitirTextoEditor(textoEditor.value);
})

function atualizatextoEditor(texto){
    console.log(texto);

    // o  valor do texto fica pra todo mundo:
    textoEditor.value = texto;
};

export default atualizatextoEditor;