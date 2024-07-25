import atualizatextoEditor from "./documento.js";

const socket = io();

function emitirTextoEditor(texto){
    socket.emit("texto_editor",texto);
    console.log("Soltou tecla");
}


socket.on("texto_editor_clientes",(texto)=>{
    atualizatextoEditor(texto);
})
    


export default emitirTextoEditor;