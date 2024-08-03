import {MongoClient} from "mongodb";

const cliente = new MongoClient("mongodb://localhost:27017");
let documentos;
try {
    await cliente.connect();

    const db = cliente.db("Textos");
    documentos = db.collection("Documentos");
    console.log("Conectado ao banco de dados com sucesso!")
}catch(erro){
    console.log("deu erro");
    console.log(erro);
};

export {documentos};