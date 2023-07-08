import Produto from "../../models/produto.js";

export default (req, res, next) => {
    let body = req.body;        //eh preciso instanciar um objeto pra fzr essa verificaçao, vitim eh teu padrim?
    let produto = new Produto(body.nome, body.valor);
    if (req.originalUrl == "/produto/cadastrar") {
            if (produto.valor < 0){
                produto.valor = 0;
                res.send("Valor negativo")
            } 
            if (produto.valor > 1000000) {
                produto.valor = 1000000;
                res.send("Valor inválido");
            }
    }
    next();
}
    