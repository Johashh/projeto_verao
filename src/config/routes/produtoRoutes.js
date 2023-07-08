import {Router} from "express";
import produtoServices from "../../controllers/produtoController.js"
import produtoValidarValor from "../middlewares/produtoValidarValor.js";
import authMiddleware from "../middlewares/authMiddleware.js"

const route = Router();

route.use(authMiddleware);

route.use(produtoValidarValor);

route.get("/listar", produtoServices.listarProdutos);

route.get("/:consultarValor", produtoServices.buscarProdutoPorValor);

route.post("/cadastrar", produtoServices.cadastrarProduto);

export default route;