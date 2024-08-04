import {atualizatextoEditor,alertarERedirecionar} from "./documento.js";
import { removerLinkDocumento } from "./index.js";

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

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento",nome);

}

socket.on("excluir_documento_sucesso",(nome)=>{
    alertarERedirecionar(nome);
    removerLinkDocumento(nome);
});




export {emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento};
