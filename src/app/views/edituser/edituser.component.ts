import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  id: any;
  submit=false;

   constructor(public _utilisateurService:UtilisateurService,private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'] //log the value of id
   });
    this._utilisateurService.get_utilisateur(this.id).subscribe(res => {
      this._utilisateurService.initialiser(res)
      })

      this._utilisateurService.All_Privilege().subscribe(res => {
        this._utilisateurService.listPrivilege = res as []
 
        })
  }


  EditUtilisateur(){
    this._utilisateurService.modifierUtilisateur( ).subscribe(res => {

      let test =res as Utilisateur;
     if (test != null) {
        this._utilisateurService.All_utilisateur().subscribe(res => {
        this._utilisateurService.listUtilisateur = res as Utilisateur[]
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
    this.EditUtilisateur();
  }
}
