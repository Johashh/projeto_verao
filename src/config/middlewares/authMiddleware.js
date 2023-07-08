import {logado} from "../../services/loginServices.js"

export default (req, res, next) => {
    if(!logado){
        res.send("Você não está logado")
    }
    next();
}