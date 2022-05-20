import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:8080/Admins/login';
  link2 = 'http://localhost:8080/Utilisateurs/login';

  constructor(private http: HttpClient , private router: Router) {}

  login(identifiants) {
    return this.http.post(`${this.link}?email=`+ identifiants.email
    + '&password='+identifiants.password
    ,JSON.stringify('')
    );  
  }
  loginUser(identifiants) {
    return this.http.post(`${this.link2}?email=`+ identifiants.email
    + '&password='+identifiants.password
    ,JSON.stringify('')
    );  
  }
  logout() {
    localStorage.removeItem('my_token');
    this.router.navigate(['/auth/login']);

  }

  estConnecte() {
    let token = localStorage.getItem('my_token');
    return !!token;
  }
}