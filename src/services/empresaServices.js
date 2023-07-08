import Empresa from "../models/empresa.js";

const empresas = [
    new Empresa("Teu padrim", "Rua do Maldito", 20),
    new Empresa("O Maldito do Inferno", "Rua da Mizera", 40)
];

function listarEmpresas(){
    return empresas;
}

function listarID(dados){
    for(var i = 0; i < empresas.length; i++){
        if(empresas[i].ID == dados ){
            return empresas[i];
        }
    }
}

function criar(newCompany) {
    empresas.push(newCompany);
}

export default {
   listarEmpresas,
   listarID,
   criar
}