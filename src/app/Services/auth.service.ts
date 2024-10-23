import { Inject, Injectable } from '@angular/core';
import { UserService } from './user.servic';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = Inject(UserService);
  login(userName: String, password: string) {
    let user = this.userService.user.find(
      (u) => u.userName === userName && u.password === password
    );
    if (user === undefined) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
      return user;
    }
  }
  logout() {
    this.isLogged = false;
  }
  IsAutheticated() {
    return this.isLogged;
  }
}
