import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor( public auth: AuthService , private router: Router) {}
  Login
  password 
  invalide

  ngOnInit(): void {}
 login(f){
  console.log(f.value);
  this.auth.login(f.value).subscribe(res => {
  console.log(res);
  if(res){
  localStorage.setItem('my_token',res['token'])
  
  this.router.navigate(['/admin/dashboard']);
} 
else{
  this.invalide=true
}
  })
 }

}
