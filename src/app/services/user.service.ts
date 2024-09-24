import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly base_url = "http://localhost:5104/api/"
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.base_url+'user');
  }
}
