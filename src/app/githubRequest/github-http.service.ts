import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment'
import {Observable } from 'rxjs';
import { Gitrequestclass } from '../gitrequest/gitrequestclass'

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {
githubinfo:Gitrequestclass;
  constructor(private http:HttpClient) { 
    this.githubinfo= new Gitrequestclass("","")
  }
  githubRequest(){
    interface ApiResponse{
      username:string;
      repository:any;
    }
    let promise= new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/richardkefa/+environment.apiToken").toPromise().then(Response=>{
        this.githubinfo.userName=Response.username
        this.githubinfo.repository=Response.repository

        resolve()
      },err=>{
        this.githubinfo.userName="richardkefa"
        this.githubinfo.repository="https://github.com/richardkefa"

        reject(console.error("Error occured"))
      })
    })
    return promise
  }
}
