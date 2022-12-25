import {Component, OnInit} from '@angular/core';
import {LightGallery} from "lightgallery/lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import {User} from "../../model/user";
import {Profil} from "../../model/profil";
import {UserService} from "../../shared-service/userService/user.service";
import {ToastService} from "../../shared-service/toastService/toast.service";

declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private userService: UserService, private toastService : ToastService) {
  }
  selectedFiles?: FileList;
  previews: string[] = [];
 infoUser:any={}
  size = '1400-933'
  private lightGallery!: LightGallery;
  private needRefresh = false;
  user!:User
  galery!:any[]
  ngOnInit(): void {
    $(() => {
      $('.dropify').dropify({
        tpl: {
          wrap: '<div class="dropify-wrapper"></div>',
          loader: '<div class="dropify-loader"></div>',
          message: '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos</p></div>',
          preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Changer une autre photo</p></div></div></div>',
          filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton: '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine: '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }
      })
    })
  this.user=new User()
    this.getProfil()
    // lightGallery(document.getElementById('lightgallery'))
  }

  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };
  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }

  }
  upload(idx: number, file: File): void {
    // this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.userService.onUploadGalery(file).subscribe({
        next:(result:any)=>{this.toastService.successToast(result.message,result.titre)
          this.ngOnInit()},
        error:(error:any)=>{this.toastService.errorToast(error.error.message,"Erreur")},
        complete:()=>{}
      });
    }


  }
  uploadFiles(): void {
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }else {
      this.toastService.errorToast("Image Invalide","Erreur")
    }
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

       if(result.images){
         this.galery=result.images
       }
      },
      error: (err) => {
      this.toastService.errorToast(err.error.message,"Erreur")
      },
      complete: () => {
      }
    })
  }

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

}
