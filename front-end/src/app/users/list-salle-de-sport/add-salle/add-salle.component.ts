import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';


import {Router} from "@angular/router";
import {User} from "../../../model/user";
import {sallesport} from "../../../model/salleDeSport";
import {UserService} from "../../../shared-service/userService/user.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";




declare var $: any;
@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css'],
})
export class AddSalleComponent implements OnInit {
  @ViewChild('nomSalleInput') nomSalleInput!: ElementRef;
  @ViewChild('urlInput') urlInput!: ElementRef;
  @ViewChild('numTelinput') numTelinput!: ElementRef;
  @ViewChild('villeinput') villeinput!: ElementRef;
  @ViewChild('rueinput') rueinput!: ElementRef;
  @ViewChild('prixinput') prixinput!: ElementRef;
  @ViewChild('postalinput') postalinput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('idinput') idinput!: ElementRef;



iduser!:Number;
  user ! :User;

selectedFiles?:FileList
  value: any = 0;
  formatLabel(value: number) {

      return value  + '%';



  }
  previews: string[] = [];
  listGym! : sallesport []
  gym! : sallesport
  montant!: number;
  constructor(private router: Router,private userService:UserService,private toastService:ToastService,
              private salleDeSportService:SalleDeSportService)
  {
  }
  ngOnInit(): void {

    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
    console.log(this.user.id)
    this.iduser= this.user.id;

   this.gym = new sallesport();
    $(()=>{
      $('.dropify').dropify({  tpl: {
          wrap:            '<div class="dropify-wrapper"></div>',
          loader:          '<div class="dropify-loader"></div>',
          message:         '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos pour votre salle de sport</p></div>',
          preview:         '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Ajouter une autre photo</p></div></div></div>',
          filename:        '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton:     '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine:       '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }})
    })

  }
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

  createGym(){


    if (this.selectedFiles) {


      const nomSalle = this.nomSalleInput.nativeElement.value;
      const numTel = this.numTelinput.nativeElement.value;
      const ville = this.villeinput.nativeElement.value;
      const rue = this.rueinput.nativeElement.value;
      const prix = this.prixinput.nativeElement.value;
      const postale = this.postalinput.nativeElement.value;
      const description = this.descriptionInput.nativeElement.value;
      const url = this.urlInput.nativeElement.value;
      const id = this.idinput.nativeElement.value;

      const formData: FormData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++){

        formData.append('images[]', this.selectedFiles[i]);

      }
      formData.set('numTel' , numTel);
      formData.set('ville' , ville);
      formData.set('rue' , rue);
      formData.set('prix' , prix);
      formData.set('codePostal' , postale);
      formData.set('description' , description);
      formData.set('nomSalle', nomSalle);
      formData.set('url',url);


      this.salleDeSportService.createGym(formData).subscribe({
        next:(result)=>{this.toastService.successToast(result.message,result.titre)},
        error:(err)=>{this.toastService.successToast(err.error.message,"Erreur")},
        complete:()=>{this.router.navigate(["list-salle-de-sport"])}
      })

    }else {
      this.toastService.errorToast("Images Obligatoire", "Erreur")
    }


    }




  }


