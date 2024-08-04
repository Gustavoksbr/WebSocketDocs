import {emitirTextoEditor,  selecionarDocumento, emitirExcluirDocumento } from "./socket-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nome = parametros.get("nome");
const tituloDocumento = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");
const botaoExcluir = document.getElementById("excluir-documento");

tituloDocumento.textContent = nome || "Documento sem título";

selecionarDocumento(nome);

textoEditor.addEventListener("keyup",()=>{
    emitirTextoEditor({
        texto: textoEditor.value,
        nome: nome
    }

    );
})

function atualizatextoEditor(texto){
    console.log(texto);

    // o  valor do texto fica pra todo mundo:
    textoEditor.value = texto;
};

botaoExcluir.addEventListener("click",()=>{
    emitirExcluirDocumento(nome);
})

export {atualizatextoEditor};