import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { GithubHttpService } from '../githubRequest/github-http.service'


@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {
  username:any;
  @Output() searchedUserName = new EventEmitter<any>();
  submitUserName(form: NgForm){
    this.searchedUserName.emit(this.username)
    console.log(this.username)
  }

  constructor(private githubhttpservice:GithubHttpService) { }

  ngOnInit(): void {
  }

}
