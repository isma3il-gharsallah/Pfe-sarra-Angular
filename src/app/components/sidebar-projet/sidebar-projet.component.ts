import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'src/app/models/Projet/Projet.model';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-sidebar-projet',
  templateUrl: './sidebar-projet.component.html',
  styleUrls: ['./sidebar-projet.component.css']
})
export class SidebarProjetComponent implements OnInit {
  collapseShow = "hidden";
  id: string;
  projet: any;
  constructor(public _projetService:ProjetService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this._projetService.get_Projet(this.id).subscribe(res => {
  this.projet=res as Projet
 
  
       } )
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
 
  
}
