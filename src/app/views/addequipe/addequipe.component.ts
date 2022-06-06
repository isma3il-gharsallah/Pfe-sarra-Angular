import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { Equipe } from 'src/app/models/equipe/Equipe.model';
import { EquipeService } from 'src/app/services/equipe.service';


@Component({
  selector: 'app-addequipe',
  templateUrl: './addequipe.component.html',
  styleUrls: ['./addequipe.component.css']
})
export class AddequipeComponent implements OnInit {
  cards;
  submit: boolean;
  listEquipe: Equipe[];
  id: any;
  cardLength: boolean;
   constructor(public _equipeService:EquipeService,private route: ActivatedRoute) {
   
    this.id = this.route.snapshot.paramMap.get("id");
 
  }

  
  ngOnInit(): void {
    this.ListeEquipe()
  }



  constructSrc(hexVal, size){
    const constructedVal = "https://icongr.am/material/hexagon.svg?size=" + size + "&color=" + hexVal;
    return constructedVal;

  }

  AddEquipe(){
    this._equipeService.insertEquipe(this.id).subscribe(res => {
      this.ListeEquipe()
       let test =res as Equipe;
     if (test != null) {
        this._equipeService.All_EquipeByProject(this.id).subscribe(res => {
        this._equipeService.listEquipe = res as Equipe[]
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
    this.AddEquipe();
  }

  ListeEquipe(){
    this._equipeService.All_EquipeByProject(this.id).subscribe(res => {
      this.listEquipe = res as Equipe[]
        
      })
 
  }
  colors=["#f0f"]
  search
  delete(id){
      this._equipeService.delete_Equipe(id).subscribe(res => {
     this.ListeEquipe()
 
      })
      
  }
}
