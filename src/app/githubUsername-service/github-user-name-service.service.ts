import { Injectable } from '@angular/core';
import { UserDetailsClass } from '../githubUserDetails/user-details-class'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubUserNameServiceService {
  userName: UserDetailsClass[]=[new UserDetailsClass(1,"richardkefa")]
  getUserName(){
    return this.userName;
  }

  constructor() { }
}
