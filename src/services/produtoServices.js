import Produto from "../models/produto.js";

const produtos = [
    new Produto("coxinha", 20),
    new Produto("joelho", 10)
];

function cadastrarProduto(novoProduto) {
    produtos.push(novoProduto);
}

function listarProdutos() {
    return produtos;
}

function buscarProdutoPorValor(valor) {
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].valor == valor) return produtos[i];
    }
}

export default {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorValor
}
