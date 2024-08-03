import { documentos } from "./dbConnect.js";

function encontrarDocumento(nome) {
    const documento = documentos.findOne({
          nome: nome
      })
  
    return documento;
  }

  function atualizaDocumento(nome,texto)
  {
    const atualizacao = documentos.updateOne({
      nome
    },
  {
    $set: {texto}
  })
  
  return atualizacao;
  }

  export {encontrarDocumento,atualizaDocumento};