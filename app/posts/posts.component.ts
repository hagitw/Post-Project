import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { PostsService } from './posts.service';
@Component({
  selector: 'posts',
  template: `
  
wellcome to posts

<table class="table table-bordered">
    <thead>
      <tr>
        <th>Usrt id</th>        
        <th>Id</th>
          <th>Title</th>
             <th>Body</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let post of arrposts">
        <td>{{post.userId}}</td> 
        <td>{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
      </tr>
          </tbody>
      </table>

  `
  ,
  providers: [PostsService]
})
export class PostsComponent {
  arrposts: any;
  constructor(private service: PostsService) {

    //if(this.arrusers=null){
    const req = this.service.GetResponse('posts');
    req.subscribe(rsp => {
      this.arrposts = rsp.json();
      console.log(this.arrposts);})
  }

}