import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  submit: boolean;

  constructor(public _utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
  }


  
  AddUtilisateur(){
    this._utilisateurService.insertUtilisateur().subscribe(res => {

      let test =res as Utilisateur;
     if (test != null) {
        this._utilisateurService.All_utilisateur().subscribe(res => {
        this._utilisateurService.listUtilisateur = res as Utilisateur[]
        this.submit=true
        })
     }
   },
    err => {
       console.log(err)
           }
   )
  }

  onSubmit(){
    this.AddUtilisateur();
    console.log('test')
    
    

  }

}
