import Produto from "../models/produto.js";
import produtoServices from "../services/produtoServices.js";
import Response from "../models/response.js";

const cadastrarProduto = (req, res) => {
    const novoProduto = req.body;
    const produto = new Produto(novoProduto.nome, novoProduto.valor);

    produtoServices.cadastrarProduto(produto);
    res.status(201).send(new Response(201, "Cadastro realizado com sucesso"))
}

const listarProdutos = (req, res) => {
    const produtos = produtoServices.listarProdutos();
    const response = new Response(200, produtos);
    res.status(200).send(response);
}

const buscarProdutoPorValor = (req, res) => {
    const valor = req.params.consultarValor;
    const produto = produtoServices.buscarProdutoPorValor(valor);
    const response = new Response(200, produto);
    res.status(200).send(response);
}

export default {
    listarProdutos,
    buscarProdutoPorValor,
    cadastrarProduto
}