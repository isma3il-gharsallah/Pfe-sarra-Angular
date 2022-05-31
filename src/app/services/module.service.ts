import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { Module } from '../models/module/Module.model';
import { DatePipe } from '@angular/common';
 
@Injectable({
  providedIn: 'root' 
})
export class ModuleService {
 
  formModule=this.fb.group({
    id_Module : ["" , Validators.required],
	  name : ["" , Validators.required],
	  start : ["" , Validators.required],
	  end : ["" , Validators.required],
	  custom : ["" , Validators.required],
	  projet : ["" , Validators.required],
	  equipe : ["" , Validators.required],
  });
 
 

  listModule:Module[]
  constructor(private datePipe: DatePipe,private http: HttpClient, private fb: FormBuilder) {

   }


  insertModule(id) {
      return this.http
    .post(
      environment.ModuleApiUrl + "/save?name="+
      this.formModule.value['name']
      +"&start="+this.formModule.value['start']
      +"&end="+this.formModule.value['end']
      +"&equipe="+this.formModule.value['equipe']
      +"&projet="+id
      +"&custom=progress" 

      ,JSON.stringify(''))
  }

  All_ModuleByProject(id){
     return this.http.get(environment.ModuleApiUrl + "/ModuleByProject?id="+id );
  }

  get_Module(id:any) {
    return this.http.get(environment.ModuleApiUrl + "/get?id="+id);
  }

  initialiser(ev){
     
 this.formModule.setValue(ev)
  }

  modifierModule(id,start,end) {
    return this.http
  .post(
    environment.ModuleApiUrl + "/update?name="+
    this.formModule.value['name']
    +"&start="+this.datePipe.transform( start, 'yyyy/MM/dd') 
    +"&end="+this.datePipe.transform( end, 'yyyy/MM/dd') 
    +"&equipe="+this.formModule.value['equipe']
    +"&projet="+id
    ,JSON.stringify(''))
  }

  delete_Module(id:any) {
    return this.http.get(environment.ModuleApiUrl + "/delete?id="+id);
  }
 
 
}
