import {Component, OnInit} from '@angular/core';
import {LightGallery} from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom'

import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../model/user";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";
import {UserService} from "../../../shared-service/userService/user.service";
import {sallesport} from "../../../model/salleDeSport";
import {materielSalle} from "../../../model/materielSalle";
import {EquipementGymService} from "../../../shared-service/materialSalleService/equipement-gym.service";


declare var $: any;

declare var window: any;

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {
   imagesGym : any
   idGym: number;

   // equipment! : any
   user! :User
  selectedFile!: File

  previews: string[] = [];
  constructor(private toastService: ToastService,
              private salleDeSportService: SalleDeSportService,
              private ac: ActivatedRoute,
              private userService: UserService,
              private equipementGymService:EquipementGymService,
              private router: Router)

  {this.idGym = this.ac.snapshot.params["id"];}

  gym!: sallesport;
  equipment !: materielSalle []
  equipments : materielSalle = new materielSalle()
  formModal: any;
  selectedFiles!:FileList
  size = '1400-933'
  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngOnInit(): void {
    $(() => {
      $('.dropify').dropify({
        tpl: {
          wrap: '<div class="dropify-wrapper"></div>',
          loader: '<div class="dropify-loader"></div>',
          message: '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos pour votre salle de sport</p></div>',
          preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Ajouter une autre photo</p></div></div></div>',
          filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton: '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine: '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }
      })
    })
    this.user = this.userService.getUser() || JSON.parse(localStorage.getItem("user") || '{}')
    this.salleDeSportService.getGymById(this.idGym).subscribe(
      (data) => {
        this.gym = data.gym;
        this.equipment = data.equipment;
        // console.log(data)
        console.log(this.equipment)
        this.salleDeSportService.getImagesGym(this.gym.id).subscribe(
          (data) => {
            this.imagesGym = data.images
            console.log(this.imagesGym)
          });
        // console.log(this.idGym)
        this.equipementGymService.getEquipementGym(this.gym.id).subscribe(
          (data) => {
            this.equipment = data.equipement, console.log(this.equipment)
          })

      });

  }


  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
    this.formModal = new window.bootstrap.Modal(document.getElementById("exampleModal"))

  };
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
  getEditGym(gym: sallesport) {
    this.gym = gym;
  }
  onFileChanged(e:any){
    this.selectedFile=e.target.files[0]
  }
  onUploadImage(id:any) {
    console.log(id)
    const uploadData = new FormData();
    uploadData.append('imageVitrine', this.selectedFile, this.selectedFile.name);
    this.salleDeSportService.postImageGym(uploadData,id).subscribe()
  }
  updateGym() {
    return this.salleDeSportService.putGymUpdate(this.idGym, this.gym).subscribe(
      (data) => {this.gym = data.updated
      this.toastService.successToast("modification avec succès","success")});
  }
  // updateImageGym(){
  //   return this.salleDeSportService.postImageGym(this.idGym,this.imagesGym).subscribe()
  // }
  addEquipementGym(idGym : any ){
    const uploadData = new FormData();
    uploadData.append('imageVitrine', this.selectedFile, this.selectedFile.name);
    console.log(uploadData.getAll('imageVitrine'));
    let nomEquipement = document.getElementById("nomEquipement") as HTMLInputElement ;
    let discipline = document.getElementById("discipline") as HTMLInputElement ;
    let description = document.getElementById("description") as HTMLInputElement ;
    uploadData.set('nomMaterial',nomEquipement.value)
    uploadData.set('description',description.value);
    uploadData.set('specialite',discipline.value);
    //equipment.imageVitrine=uploadData.get('imageVitrine')
    //console.log(uploadData.getAll('nomMaterial'))
    //console.log(equipment)
    return this.equipementGymService.getCreateEquipementGym(idGym,uploadData).subscribe({
      next:(result)=>{this.toastService.successToast(result.message,result.titre)},
      error:(err)=>{this.toastService.successToast(err.error.message,"Erreur")},
      // complete:()=>{this.router.navigate(["detail-salle"])}
      });
  }
updateEquipmentGym(){
    return this.equipementGymService.putUpdateEquipementGym(this.idGym,this.equipments).subscribe(
      (data) => {this.equipments = data.updated
  this.toastService.successToast("modification avec succès","success")});

}

editMateriel(materiel : any){
  this.equipments=materiel
}

}

