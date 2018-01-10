import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';


export class PostsService {
    private url: string;
    GetResponse(posts:string) {
         this.url = "https://jsonplaceholder.typicode.com/";
        return this.http.get(this.url + posts);
    }
    constructor( @Inject(Http) private http: Http) {      
    }
}