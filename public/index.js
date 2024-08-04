import {emitirAdicionarDocumento} from './socket-index.js';

const listaDocumentos = document.getElementById("lista-documentos");

const form = document.getElementById("form-adiciona-documento");
const input = document.getElementById("input-documento");

if(form){
    form.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        emitirAdicionarDocumento(input.value);
        console.log(input.value);
    });
    
}

function inserirLinkDocumento(nome){
    listaDocumentos.innerHTML += `
    <a href="documento.html?nome=${nome}" 
    class="list-group-item list-group-item-action"
    id ="documento-${nome}"
    >
        ${nome}
    </a>
    `
};
function removerLinkDocumento(nome)
{
    const documento = document.getElementById(`documento-${nome}`);
    listaDocumentos.removeChild(documento);
}
export {inserirLinkDocumento, removerLinkDocumento};