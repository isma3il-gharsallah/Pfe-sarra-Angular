import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { Equipe } from 'src/app/models/equipe/Equipe.model';
import { Module } from 'src/app/models/Module/module.model';
import { EquipeService } from 'src/app/services/equipe.service';
import { ModuleService } from 'src/app/services/module.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {

  listEquipe: Equipe[];
  listModules: Module[]
  id: any;
  submit: boolean;
  start = new Date();
  end = new Date();
  search

   constructor(public _moduleService:ModuleService,public _equipeService:EquipeService,public _projetService:ProjetService,private route: ActivatedRoute, private router: Router) {

   }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ListeEquipe()
    this.ListeModule()
       
  }

  ListeEquipe(){
    this._equipeService.All_EquipeByProject(this.id).subscribe(res => {
      this._equipeService.listEquipe = res as Equipe[]
      console.log(res);
       })
   }

   ListeModule(){
    this._projetService.get_List_Modules(this.id).subscribe(res => {
      this._moduleService.listModule = res as Module[]
      console.log(res);

       })
       
   }

   AddAffectation(){
    this._moduleService.insertModule(this.id,this.start,this.end).subscribe(res => {

      let test =res as  Module;
      this.submit=true
      this.ListeModule()
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

  delete(id){
    this._moduleService.delete_Module(id).subscribe(res => {
   this.ListeModule()
    })
    
}

}
