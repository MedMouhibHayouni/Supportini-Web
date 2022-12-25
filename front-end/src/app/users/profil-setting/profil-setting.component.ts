import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared-service/userService/user.service";
import {User} from "../../model/user";
import {ToastService} from "../../shared-service/toastService/toast.service";
import {Profil} from "../../model/profil";
declare var $: any;
@Component({
  selector: 'app-profil-setting',
  templateUrl: './profil-setting.component.html',
  styleUrls: ['./profil-setting.component.css']
})
export class ProfilSettingComponent implements OnInit {
  actPwd!:string;
  newPwd!:String;
  confirm_pwd!:String
  toggle:boolean=false
  infoUser!:any
  user!:User
  profil !: Profil
  selectedFile!: File
  dateMax = Date.now();


  constructor(private userService: UserService,private toastService:ToastService) { }

  ngOnInit(): void {
    this.profil = new Profil()
    this.infoUser={}
    this.user= new User()
    this.getProfil()
    $(()=>{
      $('.dropify').dropify({  tpl: {
          wrap:            '<div class="dropify-wrapper"></div>',
          loader:          '<div class="dropify-loader"></div>',
          message:         '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter une photo</p></div>',
          preview:         '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Changer une autre photo</p></div></div></div>',
          filename:        '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton:     '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine:       '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }})
    })
  }
  getProfil() {
    this.userService.getUserWithProfil().subscribe({
      next: (result) => {

        if(result.profil['0'].fk_idRole!=4 && result.profil['0'].fk_idRole!=1){

          this.infoUser = result.profil['0']
          this.user=this.infoUser.utilisateur
        }else {

          this.user=result.profil['0']
        }


      },
      error: (err) => {
        this.toastService.errorToast(err.error.message,"Erreur")
      },
      complete: () => {
      }
    })
  }



  validatorNewPassword ():boolean{

    return this.newPwd==this.actPwd ? false : true

  }
  validatorConfirmPassword ():boolean{

    return this.newPwd==this.confirm_pwd ? true : false

  }
  updateUser(){

    this.userService.updateUser(this.user).subscribe({
      next:(result)=>{this.toastService.successToast(result.message,result.titre)},
      error:(err)=>{this.toastService.errorToast(err.error.message,"Erreur")},
      complete:()=>{}
    })
  }
  updateInfoSecurty (){
      this.user.password=this.newPwd
    this.userService.updateUser(this.user).subscribe({
      next:(result)=>{this.toastService.successToast(result.message,result.titre)},
      error:(err)=>{this.toastService.errorToast(err.error.message,"Erreur")},
      complete:()=>{}
    })
  }
  onFileChanged(e:any){
    this.selectedFile=e.target.files[0]

  }


  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();

    uploadData.append('image_name', this.selectedFile, this.selectedFile.name);

    this.userService.onUpload(uploadData).subscribe({
      //next:(result)=>{this.toastService.successToast(result.message,result.titre)
      //.userService.updateStore(result.updated)},
      error:(err)=>{this.toastService.errorToast(err.error.message,"Erreur")},
      complete:()=>{this.getProfil()}
    })
  }
  onCheckboxChange(e:any){
    this.profil.specialite.push(e.target.value)
    console.log(this.profil.specialite)
  }
  updateSpecialite (){
    this.userService.updateProfil(this.profil.specialite).subscribe({
      next:(result)=> {console.log(result)},
      error:(err) =>{console.log(err)},
      }

    )
  }
}
