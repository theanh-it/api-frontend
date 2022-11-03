import {userServer1Api as user} from "./Server1/UserServer1Api.js";

user.getAll()
.then(result=>{
    console.log(result);
})
.catch(error => console.log(error.message));