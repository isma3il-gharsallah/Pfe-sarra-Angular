import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { Equipe } from 'src/app/models/equipe/Equipe.model';
import { Module } from 'src/app/models/Module/module.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-gestionmodule',
  templateUrl: './gestionmodule.component.html',
  styleUrls: ['./gestionmodule.component.css']
})
export class GestionmoduleComponent implements OnInit {

  listEquipe: Equipe[];
  id: any;
  submit: boolean;
  start = new Date();
  end = new Date();
   constructor(public _moduleService:ModuleService,public _equipeService:EquipeService,private route: ActivatedRoute, private router: Router) {

   }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ListeEquipe()

  }

  ListeEquipe(){
    this._equipeService.All_EquipeByProject(this.id).subscribe(res => {
      this._equipeService.listEquipe = res as Equipe[]
      console.log(res);

       })
       
   }

   AddAffectation(){
    this._moduleService.modifierModule(this.id,this.start,this.end).subscribe(res => {

      let test =res as  Module;
      this.submit=true
   
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
