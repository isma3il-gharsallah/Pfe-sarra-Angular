import { Component, Input, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-listeprojetadmin',
  templateUrl: './listeprojetadmin.component.html',
  styleUrls: ['./listeprojetadmin.component.css']
})
export class ListeprojetadminComponent implements OnInit {
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
    this._projetService.All_Projet().subscribe(res => {
      this.listProjet = res as Projet[]
      console.log(res);
      
      })
  }

}
