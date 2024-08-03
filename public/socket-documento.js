import {atualizatextoEditor} from "./documento.js";

const socket = io();

function selecionarDocumento(nome)
{
    socket.emit("selecionar_documento",nome,(texto)=>{atualizatextoEditor(texto)});
    console.log("Socket.emit em "+nome)
}

function emitirTextoEditor(dados){
    socket.emit("texto_editor",dados);
    console.log("Soltou tecla");
}


socket.on("texto_editor_clientes",(texto)=>{
    atualizatextoEditor(texto);
})
    
// socket.on("texto_documento",(texto)=>{
//     atualizatextoEditor(texto);
// })


export {emitirTextoEditor, selecionarDocumento};
