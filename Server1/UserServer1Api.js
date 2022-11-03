import Server1Api from "./Server1Api";

class UserServer1Api extends Server1Api{
    constructor(prefix){
        super("user/" + prefix);
    }

    error(error){
        console.log("error: http request user", this.domain + "/" + this.prefix)
    }

    log(){
        console.log(this.domain, this.prefix);
    }
}

let userServer1Api =  new UserServer1Api("");

export {userServer1Api, UserServer1Api};