import axios from "axios";
import { setUncaughtExceptionCaptureCallback } from "process";

class ReqResBase {

    public url: string;
    public constructor(url: string = "https://reqres.in/api") {
        // if (url && url.length > 0) {
        //     this.url = url;
        // }
        this.url = url;
    }
}

class UserReqRes extends ReqResBase {
    public constructor(url: string) {
        super(url);
    }
    async GetUsers() {
        //console.log(this.url);
        let res = await axios.get(`${this.url}${'/users?page=1'}`);
        console.log(res.data.data);
        return (res && res.data.data.length > 0) ? res.data.data : [];
    }
    async GetUserByID(id: string) {
        let res = await axios.get(`${this.url}/users/${id}`);
        return res && res.data ? res.data : [];
    }

    /*Generic function
    https://www.w3schools.com/typescript/typescript_basic_generics.php
    */
    createPair<S, T>(v1: S, v2: T): [S, T] {
        return [v1, v2];
    }

    create<ReqResBase>(v1: ReqResBase): [ReqResBase] {
        return [v1];
    }
    
}

export default UserReqRes;