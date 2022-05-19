import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCompetence } from 'src/app/models/Affectation/userCompetence.model';
import { Competence } from 'src/app/models/competence/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-detailcompetence',
  templateUrl: './detailcompetence.component.html',
  styleUrls: ['./detailcompetence.component.css']
})
export class DetailcompetenceComponent implements OnInit {
  competence: Competence={
    titre: "",
    description: "",
    id_competence: 0
  }
  id: any;

  constructor(public _utilisateurService:UtilisateurService,public _competenceService:CompetenceService,private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.params.subscribe(params => {
       this.id=params['id'] //log the value of id
    });
    this.get_Competence();
   }
 
   get_Competence(){
     this._competenceService.get_Competence(this.id).subscribe(res => {
       this.competence = res as Competence 
       this._competenceService.getBycompetence(this.id).subscribe(res => {
        this._competenceService.listAffectation= res as UserCompetence[]
        console.log(res);

       })

       })
   }
}
