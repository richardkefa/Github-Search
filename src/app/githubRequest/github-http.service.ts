import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import {Observable, from } from 'rxjs';
import { Gitrequestclass } from '../gitrequest/gitrequestclass'

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {
githubinfo:Gitrequestclass;
  constructor(private http:HttpClient) { 
    this.githubinfo= new Gitrequestclass("","","","",0,0,"",new Date(),"")
  }
  token=environment.apiToken;
  username="richardkefa"
  repos:any;
  githubRequest(){
    interface ApiResponse{
      login:any;
      avatar_url:any;
      name:string;
      repos_url:any;
      followers:number;
      following:number;
      location:any;
      created_at:Date;
      bio:any;
      

    }
    let apiUrl="https://api.github.com/users/"+this.username;
    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(apiUrl).toPromise().then(Response=>{
        this.githubinfo.user=Response.login;
        this.githubinfo.avatar_url=Response.avatar_url;
        this.githubinfo.followers=Response.followers;
        this.githubinfo.following=Response.following;
        this.githubinfo.location=Response.location;
        this.githubinfo.bio=Response.bio;
        this.githubinfo.created_at=Response.created_at;
        this.githubinfo.name=Response.name;

        console.log(Response.login);
        console.log(Response.avatar_url);
        console.log(Response.name);

        resolve()
      },err=>{
        this.githubinfo.user="richardkefa"

        reject(console.error("Error occured"))
      })
    })
    return promise
  }
  githubRepo(){
    interface ApiResponse{
      repos:any;
    }
    let token=environment.apiToken;
    // let apiUrl="https://api.github.com/users/"+this.username+"/repos";
    let repoUrl="https://api.github.com/users/richardkefa/repos"
    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(repoUrl).toPromise().then(Response=>{
        this.repos=Response.repos;
        console.log(Response.repos);

        resolve()
      },err=>{
        this.githubinfo.user="richardkefa"

        reject(console.error("Error occured"))
      })
    })
    return promise
  }

  updateUserName(username){
    this.username=username;
  }
}
