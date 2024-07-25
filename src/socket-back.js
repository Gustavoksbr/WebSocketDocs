import io from "./servidor.js";

io.on("connection",(soc)=>{
    console.log("Um cliente se conectou! ID:", soc.id);


    soc.on("texto_editor",(texto)=>{
        //envia para todos os clientes:
        // io.emit("texto_editor_clientes",texto);
        
        soc.broadcast.emit("texto_editor_clientes",texto);
    });
});