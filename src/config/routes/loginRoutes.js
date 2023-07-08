import {Router} from "express";
import {login, logout} from "../../services/loginServices.js";

const route = Router();

route.post('/login', (req, res) => {
    login();
    res.send("Logou!")
})

route.post('/logout', (req, res) => {
    logout();
    res.send("Deslogado")
})

export default route;