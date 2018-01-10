import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { user } from './user';

export class UsersService {
    private url: string;
    GetResponse() {
      let url = "https://jsonplaceholder.typicode.com/users";
        return this.http.get(url);

    }
    constructor( @Inject(Http) private http: Http) {

    }
    DeleteUser(iduser: number) {
    return  this.http.delete('http://jsonplaceholder.typicode.com/users/' + iduser);
    }
    adduser(body: any) {
        let url = "https://jsonplaceholder.typicode.com/users";
        return this.http.post(url, body);
    }
    Edituser(body:any,userId:number) {

        let url = "https://jsonplaceholder.typicode.com/users/"+userId;
        return this.http.put(url, body);

    }
   

}