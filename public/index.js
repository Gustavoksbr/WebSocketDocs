const listaDocumentos = document.getElementById("lista-documentos");

function inserirLinkDocumento(nome){
    listaDocumentos.innerHTML += `
    <a href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
        ${nome}
    </a>
    `
};

inserirLinkDocumento("javascript");