import { Component, Input, OnInit } from '@angular/core';
import { Competence } from 'src/app/models/competence/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-gestioncompetence',
  templateUrl: './gestioncompetence.component.html',
  styleUrls: ['./gestioncompetence.component.css']
})
export class GestioncompetenceComponent implements OnInit {
  listCompetence: Competence[];
  search
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(public _competenceService:CompetenceService) {}

  ngOnInit(): void {
   this.Listeusers();
  }

  Listeusers(){
    this._competenceService.All_Competence().subscribe(res => {
      this.listCompetence = res as Competence[]
      console.log(res);
      
      })
  }

}
