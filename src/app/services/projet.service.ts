import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../models/Projet/Projet.model';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root' 
})
export class ProjetService {
   formProjet=this.fb.group({
    id_projet : ["" , Validators.required],
	  dateDebutprojet :  ["" , Validators.required],
	  dateFinprojet :    ""  ,
	  description : ["" , Validators.required],
    titre_projet : ["" , Validators.required],
	  chefde_projet : ["" , Validators.required],
	  rapport :  ["" , Validators.required],
	  etat_projet :  ["" , Validators.required],
    projetEquipe:  ["" , Validators.required],
   });

  listProjet:Projet[]

  constructor(private datePipe: DatePipe,private http: HttpClient, private fb: FormBuilder) {

   }


  insertProjet() {
      return this.http
    .post(
      environment.ProjetApiUrl + "/save?dateDebutprojet="+
      this.formProjet.value['dateDebutprojet'] 
      +"&dateFinprojet="+ this.formProjet.value['dateFinprojet']
      +"&description="+this.formProjet.value['description']
      +"&titre_projet="+this.formProjet.value['titre_projet']
      +"&chefde_projet="+this.formProjet.value['chefde_projet']
      +"&rapport="+this.formProjet.value['rapport']
      +"&etat_projet=111"
      ,JSON.stringify(''))
 
  }

  All_Projet() {
 

     return this.http.get(environment.ProjetApiUrl + "/all" );
  }

  get_Projet(id:any) {
    return this.http.get(environment.ProjetApiUrl + "/get?id="+id);
  }

  initialiser(ev){
    console.log(ev);
    
  this.formProjet.setValue(ev)
  
  }

  modifierProjet( dateDebutprojet , dateFinprojet) {
    return this.http
  .post(
    environment.ProjetApiUrl + "/updateDate?dateDebutprojet="+
     this.datePipe.transform( dateDebutprojet, 'yyyy/MM/dd') 
    +"&dateFinprojet="+ this.datePipe.transform( dateFinprojet, 'yyyy/MM/dd') 
    +"&description="+this.formProjet.value['description']
     +"&id_projet="+this.formProjet.value['id_projet']

    ,JSON.stringify(''))
  }

  delete_Projet(id:any) {
    return this.http.get(environment.ProjetApiUrl + "/delete?id="+id);
  }

  getNewProjet(id:any) {
    return this.http.get(environment.ProjetApiUrl + "/getNew?chefde_projet="+id);
  }
}
