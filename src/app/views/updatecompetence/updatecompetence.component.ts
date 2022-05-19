import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competence } from 'src/app/models/competence/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-updatecompetence',
  templateUrl: './updatecompetence.component.html',
  styleUrls: ['./updatecompetence.component.css']
})
export class UpdatecompetenceComponent implements OnInit {
  id: any;
  submit: boolean;

   constructor(public _competenceService:CompetenceService,private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'] //log the value of id
   });
    this._competenceService.get_Competence(this.id).subscribe(res => {
      console.log(res);
      
      this._competenceService.initialiser(res)
      })
  }


  EditCompetence(){
    this._competenceService.modifierCompetence( ).subscribe(res => {

      let test =res as Competence;
     if (test != null) {
        this._competenceService.All_Competence().subscribe(res => {
        this._competenceService.listCompetence = res as Competence[]
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
    this.EditCompetence();
  } 

}
