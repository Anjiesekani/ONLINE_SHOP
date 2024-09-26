import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient);
  logError(data: { statusCode: number; errorMessage: string; dateTime: Date }) {
    this.http
      .post(
        `https://online-project-cfbc7-default-rtdb.firebaseio.com/log.json`,
        data
      )
      .subscribe();
  }
  fetchError() {
    this.http
      .get(`https://online-project-cfbc7-default-rtdb.firebaseio.com/log.json`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
