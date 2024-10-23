import { Injectable } from '@angular/core';
import { User } from '../Model/model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[] = [
    { position: 1, userName: 'JohnSmith', nickname: 'js', password: '12345' },
    { position: 1, userName: 'Merry Jane', nickname: 'mj', password: '12345' },
    { position: 1, userName: 'Mark', nickname: 'mk', password: '12345' },
  ];
}
