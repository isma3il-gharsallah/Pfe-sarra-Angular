import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { Competence } from '../models/competence/competence.model';
import { UserCompetence } from '../models/Affectation/userCompetence.model';

@Injectable({
  providedIn: 'root' 
})
export class CompetenceService {
 
  formCompetence=this.fb.group({
    id_competence : ["" , Validators.required],
	  titre : ["" , Validators.required],
	  description : ["" , Validators.required],
  });

  listCompetence:Competence[]
  constructor(private http: HttpClient, private fb: FormBuilder) {

   }


  insertCompetence() {
      return this.http
    .post(
      environment.CompetenceApiUrl + "/save?titre="+
      this.formCompetence.value['titre']
      +"&description="+this.formCompetence.value['description']
      ,JSON.stringify(''))
  }

  All_Competence() {
     return this.http.get(environment.CompetenceApiUrl + "/all" );
  }

  get_Competence(id:any) {
    return this.http.get(environment.CompetenceApiUrl + "/get?id="+id);
  }

  initialiser(ev){
 this.formCompetence.setValue(ev)
  }

  modifierCompetence( ) {
    return this.http
  .post(
    environment.CompetenceApiUrl + "/update?titre="+
    this.formCompetence.value['titre']
    +"&description="+this.formCompetence.value['description']
    +"&id_competence="+this.formCompetence.value['id_competence']
    ,JSON.stringify(''))
  }

  delete_Competence(id:any) {
    return this.http.get(environment.CompetenceApiUrl + "/delete?id="+id);
  }

  /////// User Competence Affectation

  formAffectation=this.fb.group({
    id : ["" , Validators.required],
    competence : ["" , Validators.required],
	  utilisateur : ["" , Validators.required],
	  experience : ["" , Validators.required],
  });

  listAffectation:UserCompetence[]

  insertAffectation() {
    return this.http
  .post(
    environment.UserCompetenceApiUrl + "/save?competence="+
    this.formAffectation.value['competence']
    +"&utilisateur="+this.formAffectation.value['utilisateur']
    +"&experience="+this.formAffectation.value['experience']
    ,JSON.stringify(''))
}

All_Affectation() {
   return this.http.get(environment.UserCompetenceApiUrl + "/all" );
}

get_Affectation(id:any) {
  return this.http.get(environment.UserCompetenceApiUrl + "/get?id="+id);
}

initialiserAffectation(ev){
this.formAffectation.setValue(ev)
}
getByUser(id){
  return this.http.get(environment.UserCompetenceApiUrl + "/getByUser?id_utilisateur="+id);
}

getBycompetence(id){
  return this.http.get(environment.UserCompetenceApiUrl + "/getByCompetence?id_competence="+id);
}
}
