import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.css']
})
export class AddprojetComponent implements OnInit {
  Vide=true
  dateDebutprojet = new Date();
  dateFinprojet = new Date();
  myDate2 = new Date();
  submit: boolean;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "dark";
  
  constructor(public _utilisateurService:UtilisateurService,public _projetService:ProjetService) { }

  ngOnInit(): void {
//getNewProjet

this._projetService.getNewProjet(localStorage.getItem('log')).subscribe(res => {
  if(res){
  this.Vide=false
  this._projetService.initialiser(res)
  console.log(this._projetService.formProjet.value);
    }
  })
  }

  AddProjet(){
 
    
    
    this._projetService.modifierProjet(this.dateDebutprojet,this.dateFinprojet).subscribe(res => {

      let test =res as  Projet;
     if (test != null) {
        this._projetService.All_Projet().subscribe(res => {
        this._projetService.listProjet = res as Projet[]
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
    this.AddProjet();
    console.log('test')
    
    

  }

}
