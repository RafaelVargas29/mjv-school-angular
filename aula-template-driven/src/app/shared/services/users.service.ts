import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   users: Array<User> =[
    {
      id: 1,
      nome: 'Rafael',
      email: 'rafael@gmail.com',
      senha: '123456'
    },
    {
      id: 2,
      nome: 'Cassiane',
      email: 'cassiane@gmail.com',
      senha: '123456'
    }
   ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserByEmaiAndPassword(email: string, password: string){
    return this.users.find((user)=> user.email === email && user.senha === password);
  }
}
