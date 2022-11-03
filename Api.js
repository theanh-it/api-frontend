import axios from "axios";

export default class Api{
    domain  = "";
    prefix  = "";

    constructor(prefix = ""){
        this.prefix = prefix;
    }

    axios(prefix = ""){
        let baseURL = this.domain + "/" + String(this.prefix + prefix).split("/").filter(e => e != "").join("/");
        
        return axios.create({
            baseURL: baseURL,
            headers:{
                Authorization: `Bearer`
            },
            timeout: 45000
        });
    }

    error(error){
        console.log(error);
    }

    get(prefix = "", query = {}){
        return new Promise((resolve, reject) => {
            this.axios()
            .get(prefix, { params: query})
            .then(response => resolve(response.data))
            .catch(error=>{
                this.error(error);
                reject(error);
            });
        });
    }

    post(prefix = "", data = {}){
        return new Promise((resolve, reject) => {
            this.axios()
            .post(prefix, data)
            .then(response => resolve(response.data))
            .catch(error=>{
                this.error(error);
                reject(error);
            });
        });
    }
    
    patch(prefix = "", data = {}){
        return new Promise((resolve, reject) => {
            this.axios()
            .post(prefix, data)
            .then(response => resolve(response.data))
            .catch(error=>{
                this.error(error);
                reject(error);
            });
        });
    }

    delete(prefix = "", query = {}){
        return new Promise((resolve, reject) => {
            this.axios()
            .get(prefix, { params: query})
            .then(response => resolve(response.data))
            .catch(error=>{
                this.error(error);
                reject(error);
            });
        });
    }

    getSingle(id, query = {}){
        return this.get(id, query);
    }

    getAll(query = {}){
        return this.get("", query);
    }

    create(data){
        return this.post("", data);
    }

    update(id, data){
        return this.patch(id, data);
    }

    deleteOne(id){
        return this.delete(id);
    }
}