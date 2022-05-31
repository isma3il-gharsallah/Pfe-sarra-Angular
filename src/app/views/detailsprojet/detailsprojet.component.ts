import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/models/Module/module.model';
import { Tache } from 'src/app/models/Tache/tache.model';
  import { ProjetService } from 'src/app/services/projet.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-detailsprojet',
  templateUrl: './detailsprojet.component.html',
  styleUrls: ['./detailsprojet.component.css']
})
export class DetailsprojetComponent implements OnInit {
 
  siries = [];
   id: any;
  modules: Module[];
  sirie=
  {
    name: 'Work Order',

    type: 'gantt',
   states: { hover: { enabled: false } },

   data: [
      
   ],
   dataLabels: [
     {
       enabled: true,
       format:
         '<div style="color:{point.custom.taskLabelColor}">' +
         '<span>{point.custom.taskLabel}</span>' +
         '</div>',
       useHTML: true,
       align: 'center',
     },
   ],
 }
  verify: boolean;
  sirie2 
  constructor(public _utilisateurService:UtilisateurService,public _projetService:ProjetService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    


   
    this._projetService.get_List_Modules(this.id).subscribe(res => {
      
     this.modules = res as Module[] 

     for(let i=0;i<this.modules.length;i++ ){

    let data=[]

      let date= new Date(this.modules[i].start.toString())
      let date2= new Date(this.modules[i].end.toString())
      data.push({
        id : this.modules[i].id_module.toString() ,
        name:  this.modules[i].name,
        start: Date.UTC(date.getFullYear(), date.getMonth()+1, date.getDate()) ,
        end: Date.UTC(date2.getFullYear(), date2.getMonth()+1, date2.getDate()),
       custom:  this.modules[i].statut,
       collapsed: true,

 
      } )

    
    this._projetService.get_List_Taches_Module(this.modules[i].id_module).subscribe(res => {
      let taches =res as Tache[]

      for(let j=0;j<taches.length;j++){

        let date3= new Date(taches[j].start.toString())
        let date4= new Date(taches[j].end.toString())
         data.push({
          id : taches[j].name ,
          name:  taches[j].name,
          start: Date.UTC(date3.getFullYear(), date3.getMonth()+1, date3.getDate()) ,
          end: Date.UTC(date4.getFullYear(), date4.getMonth()+1, date4.getDate()),
         custom:  taches[j].statut,
         parent: taches[j].module.toString(),
         })   
      }
    })
      console.log(data);
     
      this.siries.push(
        {
          name: 'Work Order',
          type: 'gantt',
          states: { hover: { enabled: false } },
          // point: { events: { click: this.updateSelectedElement } },
          data: data ,
          dataLabels: [{
          enabled: true,
          format: '<div style="color:{point.custom.taskLabelColor}">' +
              '<span>{point.custom.taskLabel}</span>' +
              '</div>',
          useHTML: true,
          align: 'center'
          }]
        }
      )
     }
    

     console.log(this.siries);

     this.verify=true
      })
  }  }