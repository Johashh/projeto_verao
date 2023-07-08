import express from "express";
import empresaRoutes from "./config/routes/empresaRoutes.js"
import loginRoutes from "./config/routes/loginRoutes.js"
import produtoRoutes from "../src/config/routes/produtoRoutes.js"

const app = express();
const port = 3001;

app.use(express.json());

app.use("/empresa", empresaRoutes);

app.use("/produto", produtoRoutes);

app.use('/', loginRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})

