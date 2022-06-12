import { Component, OnInit } from '@angular/core';

import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Users list';
  users: User[] = [];

  haha: number = -99;
  
  haha2: number = -99;

  constructor(private userService: UserService) {
    userService.changeEmitter.subscribe( value => {
      this.haha2 = value;
    })
   }

  ngOnInit(): void {
    this.userService.getUsers().then(users => this.users = users);
    this.haha = this.userService.personNum;
  }
  test(){
    this.userService.detectChange();//personNum++
    this.haha = this.userService.personNum;
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/