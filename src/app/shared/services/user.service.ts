import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User = 'user';
  constructor(private router: Router) {}

  addUserAccount(name: string) {
    const user: User = {
      id: uuidv4(),
      name: name
    };

    localStorage.setItem(this.User, JSON.stringify(user));
  }

  getUserAccount(): User {
    return JSON.parse(localStorage.getItem(this.User) || '{}') as User;
  }

  deleteUserAccount() {
    localStorage.clear();
    this.router.navigateByUrl('/sign-up');
  }

  isLoggedIn() {
    return Object.keys(this.getUserAccount()).length > 0;
  }
}
