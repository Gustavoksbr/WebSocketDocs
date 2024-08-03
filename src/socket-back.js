import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento } from "./documentoDb.js";

// const documentos =[
//     {
//         nome:"JavaScript",
//         texto: "texto de javascript"
//     },
//     {
//         nome:"Node",
//         texto: "texto de node"
//     },
//     {
//         nome:"Socket.io",
//         texto: "texto de socket.io"
//     }
// ] 

io.on("connection",(soc)=>{
    console.log("Um cliente se conectou! ID:", soc.id);


    soc.on("selecionar_documento", async(nome,devolvertexto)=>{
        const documento = await encontrarDocumento(nome);


        soc.join(nome);
        console.log(nome);
        console.log(documento);

        if (documento)
        {
            // soc.emit("texto_documento",documento.texto);
            devolvertexto(documento.texto);
        }
    })

    soc.on("texto_editor",async (dados)=>{
        //envia para todos os clientes:
        // io.emit("texto_editor_clientes",texto);
        
        //envia para todos os clientes, exceto pra quem enviou a mensagem
        // soc.broadcast.emit("texto_editor_clientes",texto);
        console.log("alterando");

        const atualizacao = await atualizaDocumento(dados.nome, dados.texto);
        console.log(atualizacao);
        // if (documento){
        //     console.log("dados: "+dados.texto);
        //     documento.texto = dados.texto;
        //     soc.to(dados.nomeDocumento).emit("texto_editor_clientes",dados.texto);
        // }


    });
});

// sem bd:
// function encontrarDocumento(nome)
// {
//     const documento = documentos.find((documento)=>{
//         return documento.nome === nome;
//     })
//     return documento;
// }

