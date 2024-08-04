import { inserirLinkDocumento } from "./index.js";

const socket = io();
socket.emit("obter_documentos",(documentos)=>{
    documentos.forEach((documento)=>{
        inserirLinkDocumento(documento.nome);
    });
});

function emitirAdicionarDocumento(nome){
    socket.emit("adicionar_documento",nome);
};

socket.on("adicionar_documento_interface",(nome)=>{
    inserirLinkDocumento(nome);
});

socket.on("documento_existente",(nome)=>{alert(`O documento ${nome} já existe!`)})

//só apaga o input se der o erro de já existir o documento
socket.on("apagar_input",()=>{
    document.getElementById("input-documento").value="";
});

export {emitirAdicionarDocumento};