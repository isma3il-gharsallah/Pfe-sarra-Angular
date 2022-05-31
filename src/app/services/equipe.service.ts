import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { Equipe } from '../models/equipe/Equipe.model';
 
@Injectable({
  providedIn: 'root' 
})
export class EquipeService {
 
  formEquipe=this.fb.group({
    id_equipe : ["" , Validators.required],
	  nb_Equipe : ["" , Validators.required],
	  nom_Equipe : ["" , Validators.required],
	  description : ["" , Validators.required],
	  role : ["" , Validators.required],
	  projet : ["" , Validators.required],
	  membresEquipe : ["" , Validators.required],
  });

 

  listEquipe:Equipe[]
  constructor(private http: HttpClient, private fb: FormBuilder) {

   }


  insertEquipe(id) {
      return this.http
    .post(
      environment.EquipeApiUrl + "/save?nom_Equipe="+
      this.formEquipe.value['nom_Equipe']
      +"&description="+this.formEquipe.value['description']
      +"&projet="+id
      ,JSON.stringify(''))
  }

  All_EquipeByProject(id){
 
     return this.http.get(environment.EquipeApiUrl + "/EquipeByProject?id="+id );
  }

  get_Equipe(id:any) {
    return this.http.get(environment.EquipeApiUrl + "/get?id="+id);
  }

  initialiser(ev){
     
 this.formEquipe.setValue(ev)
  }

  modifierEquipe(id) {
    return this.http
  .post(
    environment.EquipeApiUrl + "/update?nom_Equipe="+
    this.formEquipe.value['nom_Equipe']
    +"&description="+this.formEquipe.value['description']
    +"&nb_Equipe="+this.formEquipe.value['nb_Equipe']
    +"&role="+this.formEquipe.value['role']
    +"&projet="+this.formEquipe.value['projet'].id_projet
    +"&id_equipe="+id
    ,JSON.stringify(''))
  }

  delete_Equipe(id:any) {
    return this.http.get(environment.EquipeApiUrl + "/delete?id="+id);
  }
 
 
}
