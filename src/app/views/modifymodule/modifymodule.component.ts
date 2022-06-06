import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-modifymodule',
  templateUrl: './modifymodule.component.html',
  styleUrls: ['./modifymodule.component.css']
})
export class ModifymoduleComponent implements OnInit {
  id: any;

  start = new Date();
  end = new Date();
  submit: boolean;

  constructor(public _moduleService:ModuleService,public _equipeService:EquipeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");


    this._moduleService.get_Module(this.id).subscribe(res => {
      this._moduleService.initialiser(res)
      console.log(res);
      
      })
  }


  ModierModule(){
    this._moduleService.modifierModule(this.id,this.start,this.end).subscribe(res => {
      this.submit=true
    })
  }

  onSubmit(){
    this.ModierModule();
  }


}
