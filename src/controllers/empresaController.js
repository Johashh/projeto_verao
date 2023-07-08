import servicesCompany from "../services/empresaServices.js"
import Empresa from "../models/empresa.js";
import Response from "../models/response.js";
import empresaServices from "../services/empresaServices.js";

const listarEmpresas = (req, res) => {
    const empresas = empresaServices.listarEmpresas();
    const response = new Response(200, empresas)
    res.status(200).send(response);
}

const listarID = (req, res) => {
    let dados = req.params.consultarid;
    const dadosID = empresaServices.listarID(dados);
    const response = new Response(200, dadosID);
    res.status(200).send(response);
}

const criar = (req, res) => {
    const newCompany = req.body;
    const empresa = new Empresa(newCompany.nome, newCompany.endereco, newCompany.id);
    
    servicesCompany.criar(empresa);
    res.status(201).send(new Response(201, "Cadastro realizado com sucesso"));
}

export default {
    listarEmpresas,
    listarID,
    criar
}