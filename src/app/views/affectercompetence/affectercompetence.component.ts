import { Component, OnInit } from '@angular/core';
import { UserCompetence } from 'src/app/models/Affectation/userCompetence.model';
import { Competence } from 'src/app/models/competence/competence.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-affectercompetence',
  templateUrl: './affectercompetence.component.html',
  styleUrls: ['./affectercompetence.component.css']
})
export class AffectercompetenceComponent implements OnInit {
 submit: boolean;

  constructor(public _competenceService:CompetenceService,public _utilisateurService:UtilisateurService) { }

  ngOnInit(): void {

    this._competenceService.All_Competence().subscribe(res => {
      this._competenceService.listCompetence = res as Competence[]
       })

      this._utilisateurService.All_utilisateur().subscribe(res => {
        this._utilisateurService.listUtilisateur = res as Utilisateur[]
         })
  }


  AddAffectation(){
    this._competenceService.insertAffectation().subscribe(res => {

      let test =res as  UserCompetence;
     if (test != null) {
        this._competenceService.All_Affectation().subscribe(res => {
        this._competenceService.listAffectation = res as UserCompetence[]
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
    this.AddAffectation();
    console.log('test')
    
    

  }

}
