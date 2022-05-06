import { Injectable } from '@angular/core';
import { IUser } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = environment.randomApi;
  constructor(private http: HttpClient) { }

  getList(): Observable<IUser[]>{
    return this.http.get<any>( this.api + '?results=30&inc=name,gender,email,phone,picture')
    .pipe(map( data => data.results));
  }
}
