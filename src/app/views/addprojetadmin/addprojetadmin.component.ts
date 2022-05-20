import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet/Projet.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { ProjetService } from 'src/app/services/projet.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-addprojetadmin',
  templateUrl: './addprojetadmin.component.html',
  styleUrls: ['./addprojetadmin.component.css']
})
export class AddprojetadminComponent implements OnInit {
  submit: boolean;

  constructor(public _utilisateurService:UtilisateurService,public _projetService:ProjetService) { }

  ngOnInit(): void {

      this._utilisateurService.All_utilisateur().subscribe(res => {
        this._utilisateurService.listUtilisateur = res as Utilisateur[]
         })
  }


  AddProjet(){
    this.submit=true

    this._projetService.insertProjet().subscribe(res => {

      let test =res as  Projet;
     if (test != null) {
        this._projetService.All_Projet().subscribe(res => {
        this._projetService.listProjet = res as Projet[]
        })
     }
   },
    err => {
       console.log(err)
           }
   )
  }

  onSubmit(){
    this.AddProjet();
    console.log('test')
    
    

  }
}
