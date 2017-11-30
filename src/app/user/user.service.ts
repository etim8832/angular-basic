import {Injectable} from '@angular/core';
import {user} from './user';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private url = 'http//localhost:3000/';
    constructor(private http : Http){ }
    getUsers():Observable<user[]>{
  return this.http.get(this.url + 'users')
  .map(res => res.json() as user[])
    }
}
   