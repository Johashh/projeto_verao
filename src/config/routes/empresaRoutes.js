import servicesCompany from "../../controllers/empresaController.js";
import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const routes = Router();

routes.use(authMiddleware);

routes.get('/listarempresas', servicesCompany.listarEmpresas)

routes.get('/:consultarid', servicesCompany.listarID)

routes.post("/cadastrarEmpresa", servicesCompany.criar)

export default routes