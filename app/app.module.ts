import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersService } from './users/users.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [AppComponent,
    HomeComponent, UsersComponent,
    PostsComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
