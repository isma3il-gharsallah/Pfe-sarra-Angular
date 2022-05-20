import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur/utilisateur.model';
import { environment } from 'src/environments/environment';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root' 
})
export class UtilisateurService {

  formUtilisateur=this.fb.group({
    id_utilisateur : ["" , Validators.required],
	  nom : ["" , Validators.required],
	  prenom : ["" , Validators.required],
	  telephone : ["" , Validators.required],

    login : ["" , Validators.required],
	  motdepasse : ["" , Validators.required],
	  email : ["" , Validators.required],
	  disponibilite :  ""  ,
 	  privilege :  ""  ,

  });

  listUtilisateur:Utilisateur[]

  constructor(private http: HttpClient, private fb: FormBuilder) {

   }


  insertUtilisateur() {
      return this.http
    .post(
      environment.UtilisateurApiUrl + "/save?nom="+
      this.formUtilisateur.value['nom']
      +"&prenom="+this.formUtilisateur.value['prenom']
      +"&telephone="+this.formUtilisateur.value['telephone']
      +"&login="+this.formUtilisateur.value['login']
      +"&motdepasse="+this.formUtilisateur.value['motdepasse']
      +"&email="+this.formUtilisateur.value['email']
      +"&privilege=111"
      +"&disponibilite=111"
      ,JSON.stringify(''))
 
  }

  All_utilisateur() {
 

     return this.http.get(environment.UtilisateurApiUrl + "/all" );
  }

  get_utilisateur(id:any) {
    return this.http.get(environment.UtilisateurApiUrl + "/get?id="+id);
  }

  initialiser(ev){
 this.formUtilisateur.setValue(ev)
  }

  modifierUtilisateur( ) {
    return this.http
  .post(
    environment.UtilisateurApiUrl + "/update?nom="+
    this.formUtilisateur.value['nom']
    +"&prenom="+this.formUtilisateur.value['prenom']
    +"&telephone="+this.formUtilisateur.value['telephone']
    +"&login="+this.formUtilisateur.value['login']
    +"&motdepasse="+this.formUtilisateur.value['motdepasse']
    +"&email="+this.formUtilisateur.value['email']
    +"&id_utilisateur="+this.formUtilisateur.value['id_utilisateur']
    +"&privilege="+this.formUtilisateur.value['privilege'].id_privilege

    ,JSON.stringify(''))
  }

  delete_utilisateur(id:any) {
    return this.http.get(environment.UtilisateurApiUrl + "/delete?id="+id);
  }
}
