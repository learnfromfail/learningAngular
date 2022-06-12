import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  changeEmitter: Subject<number> = new Subject<number>();

  constructor() { }

  personNum : number = 0;

  detectChange() {
    this.personNum++;
    this.changeEmitter.next(this.personNum);
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve([
      { id: 1, name: 'MariaHaha' },
      { id: 2, name: 'Alex' },
      { id: 3, name: 'Chuntao' },
      { id: 4, name: 'Béatrice' },
      { id: 5, name: 'Sarah' },
      { id: 6, name: 'Andrés' },
      { id: 7, name: 'Abdul' },
      { id: 8, name: 'Pierre' },
      { id: 9, name: 'Jiao' },
      { id: 10, name: 'Seth' }
    ]);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/