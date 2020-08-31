import { Component, OnInit } from '@angular/core';
import { GithubUserNameServiceService } from '../githubUsername-service/github-user-name-service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { HttpClient } from '@angular/common/http';
import { GithubHttpService } from '../githubRequest/github-http.service'
import { Gitrequestclass } from '../gitrequest/gitrequestclass'


@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {
  userName:any=[];
  githubInfo:Gitrequestclass;
  constructor(private githubUsernameService: GithubUserNameServiceService,private router:Router,private http:HttpClient,private githubRequest:GithubHttpService){
   
  }
 
  ngOnInit():any{
   this.userName=this.githubUsernameService.getUserName();
   console.log(this.userName) 
   this.githubRequest.githubRequest()
   this.githubInfo=this.githubRequest.githubinfo
  }

}
