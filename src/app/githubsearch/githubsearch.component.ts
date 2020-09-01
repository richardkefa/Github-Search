import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { HttpClient } from '@angular/common/http';
import { GithubHttpService } from '../githubRequest/github-http.service'


@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {
  user:any;
  githubInfo:any;
  repos:any;
  username:any;
  constructor(private router:Router,private http:HttpClient,private githubRequest:GithubHttpService){
   
  }
  getRepository(){
    this.githubRequest.githubRepo().subscribe(data=>{
      this.repos=data;
    })
  }
  search(username){
    this.githubRequest.updateUserName(username);
    this.githubRequest.githubRequest();
    this.githubInfo=this.githubRequest.githubinfo;
    this.getRepository();
    console.log(username)
  }
 
  ngOnInit():any{
   this.githubRequest.githubRequest()
   this.githubInfo=this.githubRequest.githubinfo;
   this.getRepository();

  }

}
