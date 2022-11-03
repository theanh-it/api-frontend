import Api from "../Api";

export default class Server1Api extends Api{
    domain = "http://localhost:3000/api";

    constructor(prefix){
        super(prefix);
    }
}