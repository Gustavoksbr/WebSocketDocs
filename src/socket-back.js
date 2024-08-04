import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento,obterDocumentos,adicionarDocumento, excluirDocumento } from "./documentoDb.js";

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

    soc.on("obter_documentos", async (devolverDocumentos)=>{
        const documentos = await obterDocumentos();
        console.log(documentos);
        devolverDocumentos(documentos);
    })

    soc.on("adicionar_documento", async (nome)=>
    {

        const documentoExiste = await encontrarDocumento(nome);
        if (documentoExiste){
            soc.emit("documento_existente",nome);
        }
        else
        {
            const resultado = await adicionarDocumento(nome);
            if (resultado.acknowledged) //se o resultado foi reconhecido
        {
            io.emit("adicionar_documento_interface",nome);
        }
        soc.emit("apagar_input");
        }
        
    });

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

    soc.on("excluir_documento", async(nome)=>{
        console.log("excluindo");
        const resultado = await excluirDocumento(nome);
        
    })
});

// sem bd:
// function encontrarDocumento(nome)
// {
//     const documento = documentos.find((documento)=>{
//         return documento.nome === nome;
//     })
//     return documento;
// }

