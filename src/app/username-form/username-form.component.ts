import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsClass } from '../githubUserDetails/user-details-class'
import { from } from 'rxjs';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {
  newUserName= new UserDetailsClass(0,"")
  @Output() searchedUserName = new EventEmitter<UserDetailsClass>();
  submitUserName(form: NgForm){
    this.searchedUserName.emit(this.newUserName)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
