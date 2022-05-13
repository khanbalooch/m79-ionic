import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = environment.randomApi;

  constructor(private http: HttpClient) { }

  getList(): Observable<User[]>{
    return this.http.get( this.api + '?results=30&inc=name,gender,email,phone,picture')
    .pipe(
      map( (data:any) => data.results.map(
        item => new User(
          item.name.first,
          item.name.last,
          item.email,
          item.phone,
          item.gender,
          item.picture.medium))))
  }
}
