import { Component, OnInit } from '@angular/core';
import { GithubHttpService } from '../githubRequest/github-http.service'
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
reponame:any;
repositories:any;
githuRepoSerch(){
  this.githubRequest.githubRepoSerch().subscribe(data=>{
    this.reponame=data;
  })
}
  constructor(private githubRequest:GithubHttpService) { }
  searchRepo(reponame){
    this.githubRequest.updateRepoName(reponame);
    this.githubRequest.githubRepoSerch();
    this.repositories=this.githubRequest.githubinfo;
    this.githuRepoSerch();

  }
 
  ngOnInit(): void {
  }

}
