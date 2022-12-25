import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../shared-service/adminService/admin.service";
import {User} from "../../../model/user";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {UserService} from "../../../shared-service/userService/user.service";

declare var $: any;

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {
  listUser !: User[]
  searchText!:string;
  constructor(private adminService: AdminService, private toastService: ToastService, private userService: UserService) {

  }

  user!: User
  selectedFile!:File
  ngOnInit(): void {
    console.log("useeeeeeer")
    this.getAllUser()
    $(() => {
      $('.dropify').dropify({
        tpl: {
          wrap: '<div class="dropify-wrapper"></div>',
          loader: '<div class="dropify-loader"></div>',
          message: '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter une photo</p></div>',
          preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Changer une autre photo</p></div></div></div>',
          filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton: '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine: '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }
      })
    })


  }

  getAllUser() {
    this.adminService.getAllUser().subscribe(
      {
        next: (result: any) => {
          this.listUser = result

        },
        error: (err: any) => {
        },
        complete: () => {
          this.getEditUser(this.listUser[0])
        }
      }
    )

  }

  banUser(id: Number) {
    return this.adminService.banUser(id).subscribe({
      next: (result: any) => {
        this.toastService.successToast(result.message, result.titre)
      },
      error: (err: any) => {
        this.toastService.errorToast(err.error.message, "Erreur")
      },
      complete: () => {
        this.ngOnInit()
      }
    })

  }
  onFileChanged(e:any){
    this.selectedFile=e.target.files[0]

  }
  onUpload(id:Number) {
    // this.http is the injected HttpClient
    const uploadData = new FormData();

    uploadData.append('image_name', this.selectedFile, this.selectedFile.name);

    this.adminService.onUpload(uploadData,id).subscribe({
      next:(result)=>{},
      error:(err)=>{},
      complete:()=>{this.ngOnInit()}
    })
  }
  getEditUser(user: User) {

    this.user = user
  }

  updateUser(id: Number) {

    return this.adminService.update(id, this.user).subscribe({
      next: (result: any) => {
        this.toastService.successToast(result.message, result.titre)
      },
      error: (err: any) => {
        this.toastService.errorToast(err.error.message, "Erreur")
      },
      complete: () => {
        this.ngOnInit()
      }
    })
  }

  filterRole(e: any) {
    switch (e.target.value) {


      case "2": {
        this.adminService.getUserByRole(2).subscribe({
          next:(res )=>{ this.listUser=res
          console.log(this.listUser)},
          error:()=>{},
          complete:()=>{}
        })
      }
      break;
      case "3":{
        this.adminService.getUserByRole(3).subscribe({
          next:(res )=>{this.listUser=res},
          error:()=>{},
          complete:()=>{}
        })
      }
      break;
      default:{
        this.adminService.getUserByRole(4).subscribe({
          next:(res )=>{ this.listUser=res},
          error:()=>{},
          complete:()=>{}
        })
      }
    }
  }


}
