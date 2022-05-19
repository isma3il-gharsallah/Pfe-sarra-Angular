import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  id: any;
  user  :any ={
    nom: "",
    prenom: "",
    
    email: "",
 
  }
  constructor(public _utilisateurService:UtilisateurService,private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'] //log the value of id
   });
   this.Getuser();

   }
   Getuser(){
     
    this._utilisateurService.get_utilisateur(this.id).subscribe(res => {
      this.user = res as Utilisateur 
 
      })
  }
  deleteuser(){
     
    this._utilisateurService.delete_utilisateur(this.id).subscribe(res => {
      this.user = res as Utilisateur 
      this.router.navigate(['/admin/gestionuser'])
      })
  }
}
