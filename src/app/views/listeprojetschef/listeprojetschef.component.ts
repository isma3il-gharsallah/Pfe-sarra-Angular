import { Component, Input, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-listeprojetschef',
  templateUrl: './listeprojetschef.component.html',
  styleUrls: ['./listeprojetschef.component.css']
})
export class ListeprojetschefComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "dark";

  listProjet : Projet[]

  constructor(public _projetService:ProjetService) {}

  ngOnInit(): void {
   this.Listeusers();
  }

  Listeusers(){
    this._projetService.All_Projet_chef(localStorage.getItem('log')).subscribe(res => {
      this.listProjet = res as Projet[]
      console.log(res);
      
      })
  }


}
