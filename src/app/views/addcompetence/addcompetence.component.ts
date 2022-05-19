import { Component, OnInit } from '@angular/core';
import { Competence } from 'src/app/models/competence/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-addcompetence',
  templateUrl: './addcompetence.component.html',
  styleUrls: ['./addcompetence.component.css']
})
export class AddcompetenceComponent implements OnInit {
  submit: boolean;

  constructor(public _competenceService:CompetenceService) { }

  ngOnInit(): void {
  }


  AddCompetence(){
    this._competenceService.insertCompetence().subscribe(res => {

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
    this.AddCompetence();
    console.log('test')
    
    

  }
}
