import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Equipe } from 'src/app/models/equipe/Equipe.model';
import { EquipeService } from 'src/app/services/equipe.service';
 
@Component({
  selector: 'app-modifyequipe',
  templateUrl: './modifyequipe.component.html',
  styleUrls: ['./modifyequipe.component.css']
})
export class ModifyequipeComponent implements OnInit {
  submit=false;
   id: any;
  myGroup: FormGroup;
  selection: any[];
  constructor(public _equipeService:EquipeService,private route: ActivatedRoute) { 
    this.myGroup = new FormGroup({
      selection  :new FormControl()
   });
  }
  changeFn(val) {
    this.selection=val
 
}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    //  this.users = this.Artists


    this._equipeService.get_Equipe(this.id).subscribe(res => {
      this._equipeService.initialiser(res)
      console.log(res);
      
      })
  }

  AddEquipe(){
    this._equipeService.modifierEquipe(this.id).subscribe(res => {
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
         
      })
 
  }
  ///////////
  
}
