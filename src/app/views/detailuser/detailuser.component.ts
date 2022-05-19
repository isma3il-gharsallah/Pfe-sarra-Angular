import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCompetence } from 'src/app/models/Affectation/userCompetence.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
   user :Utilisateur ={
     nom: "",
     prenom: "",
     telephone: "",
     login: "",
     motdepasse: "",
     email: "",
     id_utilisateur: 0,
     sexe: undefined,
     disponibilite: undefined,
     Competence: [],
     privilege: undefined
   }
   id: any;

  constructor(public _utilisateurService:UtilisateurService,public _competenceService:CompetenceService,private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.params.subscribe(params => {
       this.id=params['id'] //log the value of id
    });
    this.Getuser();
   }
 
   Getuser(){
     this._utilisateurService.get_utilisateur(this.id).subscribe(res => {
       this.user = res as Utilisateur 
       this._competenceService.getByUser(this.id).subscribe(res => {
        this._competenceService.listAffectation= res as UserCompetence[]
        console.log(res);

       })

       })
   }
}
