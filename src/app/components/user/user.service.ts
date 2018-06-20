import {Injectable} from '@angular/core';
import {users} from './users';
import {of} from 'rxjs/observable/of';
import {User} from './User';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor() {
  }

  getUserById(id: string): Observable<User> {
    return of(users.find(user => user.userId === id));
  }

}
