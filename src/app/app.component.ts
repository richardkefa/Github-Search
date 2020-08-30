import { Component } from '@angular/core';
import { GithubUserNameServiceService } from './githubUsername-service/github-user-name-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 userName:any=[]
 constructor(private githubUsernameService: GithubUserNameServiceService){
  
 }
 ngOnInIt(){
  this.userName=this.githubUsernameService.getUserName(); 
 }
}
