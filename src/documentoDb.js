import { documentos } from "./dbConnect.js";


function obterDocumentos(){
 const doc = documentos.find().toArray();

 return doc;
};

function adicionarDocumento(nome)
{
 const resultado = documentos.insertOne({
  nome,
  texto:''
 })
 return resultado;
}

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
  };

  function excluirDocumento(nome){
 const resultado = documentos.deleteOne({nome});
 return resultado;
  }

  export {encontrarDocumento,atualizaDocumento,obterDocumentos,adicionarDocumento, excluirDocumento};