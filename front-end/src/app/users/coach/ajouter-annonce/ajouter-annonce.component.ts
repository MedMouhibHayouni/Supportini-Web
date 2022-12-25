import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Annonce} from "../../../model/annonce";
import {User} from "../../../model/user";
import { TrainingDay} from "../../../model/TrainingDay";
import {UserService} from "../../../shared-service/userService/user.service";
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../shared-service/toastService/toast.service";
declare var $: any;
@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput!: ElementRef;
  @ViewChild('titreInput') titreInput!: ElementRef;
  @ViewChild('prixInput') prixInput!: ElementRef;
  @ViewChild('rueInput') rueInput!: ElementRef;
  @ViewChild('codeInput') codeInput!: ElementRef;
  @ViewChild('capaciteInput') capaciteInput!: ElementRef;
  @ViewChild('dateDebutInput') dateDebutInput!: ElementRef;
  @ViewChild('dateFinInput') dateFinInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;

  @ViewChild('tdOneInput') tdOneInput!: ElementRef;
  @ViewChild('td1HDInput') td1HDInput!: ElementRef;
  @ViewChild('td1HFInput') td1HFInput!: ElementRef;
  @ViewChild('tdTowInput') tdTowInput!: ElementRef;
  @ViewChild('td2HDInput') td2HDInput!: ElementRef;
  @ViewChild('td2HFInput') td2HFInput!: ElementRef;
  @ViewChild('tdthreeInput') tdthreeInput!: ElementRef;
  @ViewChild('td3HDInput') td3HDInput!: ElementRef;
  @ViewChild('td3HFInput') td3HFInput!: ElementRef;


  /////////////////////////////////
  //trainingd!:trainigDay
  gg = new TrainingDay();
  trainingd1=new TrainingDay()
  trainingd2=new TrainingDay()
  trainingd3=new TrainingDay()

  annonce!:Annonce
  trainingDays= new Array();
  iduser!:Number;
  user ! :User;
  constructor(private userService:UserService,private AnnonceService: AnnonceService,private router: Router,private toastService: ToastService) {}

  ngOnInit(): void {
    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
    console.log(this.user.id)
    this.iduser= this.user.id;


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

 villee!:string

  choixVille(a:any){
    switch (a.target.value){
      case "ariana":{
        this.villee="ariana"

      }break;
      case "beja":{
        this.villee="beja"

      }break;
      case "benarous":{
        this.villee="benarous"

      }break;
      case "bizerte":{
        this.villee="bizerte"

      }break;
      case "gabes":{
        this.villee="gabes"

      }break;
      case "gafsa":{
        this.villee="gafsa"

      }break;
      case "jendouba":{
        this.villee="jendouba"

      }break;
      case "kairouan":{
        this.villee="kairouan"

      }break;
      case "kebili":{
        this.villee="kebili"

      }break;
      case "kef":{
        this.villee="kef"

      }break;
      case "mahdia":{
        this.villee="mahdia"

      }break;

      case "manouba":{
        this.villee="manouba"

      }break;

      case "medenine":{
        this.villee="medenine"

      }break;

      case "monastir":{
        this.villee="monastir"

      }break;

      case "Nabeul":{
        this.villee="Nabeul"

      }break;

      case "Sfax":{
        this.villee="Sfax"

      }break;

      case "sidibouzid":{
        this.villee="sidibouzid"

      }break;

      case "siliana":{
        this.villee="siliana"

      }break;
      case "sousse":{
        this.villee="sousse"

      }break;

      case "tataouine":{
        this.villee="tataouine"
        console.log(this.villee)
      }break;

      case "tozeur":{
        this.villee="tozeur"

      }break;

      case "tunis":{
        this.villee="tunis"

      }break;

      case "zaghouan":{
        this.villee="zaghouan"

      }

    }

  }

  typee!:string
  choixType(e:any){
    switch (e.target.value){
      case "domicile":{
        this. typee="domicile"
      }break;
      case "salle":{
        this. typee="salle"
      }break;
      case "entreprise":{
        this. typee="entreprise"
      }break;
      case "espace":{
        this. typee="espace"
      }break;
      case "enligne":{
        this.typee="enligne"
      }

    }

  }
  discp!:string
  ChoixDisciplin(e:any){
    switch (e.target.value){
      case "natation":{
        this.discp="natation"
      }break;
      case "foot":{
        this.discp="foot"
      }break;
      case "equitation":{
        this.discp="equitation"
      }break;
      case "gymnastique":{
        this.discp="gymnastique"
      }break;

      /////////////////////
      case "basket":{
        this.discp="basket"
      }break;
      case "dance":{
        this.discp="dance"
      }break;
      case "escalade":{
        this.discp="escalade"
      }break;
      case "handball":{
        this.discp="handball"
      }break;
      case "squash":{
        this.discp="squash"
      }break;
      case "kayak":{
        this.discp="kayak"
      }break;
      case "plonge":{
        this.discp="plonge"
      }break;
      case "voile":{
        this.discp="voile"
      }break;
      case "golf":{
        this.discp="golf"
      }break;
      case "rugby":{
        this.discp="rugby"
      }break;

        ////////////////////////////
    }

  }

createAnnonce(){
const ville=this.villee
  const type=this.typee
  const discipline=this.discp
  console.log(ville)
  console.log(type)
  console.log(discipline)
  const image = this.fileInput.nativeElement.files[0];
  const titre = this.titreInput.nativeElement.value;
console.log(titre)
  const prix = this.prixInput.nativeElement.value;
 console.log(prix)
  const rue = this.rueInput.nativeElement.value;
 console.log(rue)
  const codePostal = this.codeInput.nativeElement.value;
 console.log(codePostal)
  const capacite = this.capaciteInput.nativeElement.value;
console.log(capacite)
  const dateDebut = this.dateDebutInput.nativeElement.value;
console.log(dateDebut)
  const dateFin = this.dateFinInput.nativeElement.value;
 console.log(dateFin)
  const description = this.descriptionInput.nativeElement.value;
 console.log(description)

  const tdOneInput = this.tdOneInput.nativeElement.value;
  const td1HDInput = this.td1HDInput.nativeElement.value;
  const td1HFInput = this.td1HFInput.nativeElement.value;

if(tdOneInput!=""){

   this.trainingd1.day=tdOneInput
  this.trainingd1.heureDebut=Number(td1HDInput)
  this.trainingd1.heureFin=Number(td1HFInput)
  this.trainingDays.push(this.trainingd1)

}
  const tdTowInput = this.tdTowInput.nativeElement.value;
  const td2HDInput = this.td2HDInput.nativeElement.value;
  const td2HFInput = this.td2HFInput.nativeElement.value;
  if(tdTowInput!=""){
    this.trainingd2.day=tdTowInput
    this.trainingd2.heureDebut=Number(td2HDInput)
    this.trainingd2.heureFin=Number(td2HFInput)
    this.trainingDays.push(this.trainingd2)
  }
  const tdthreeInput = this.tdthreeInput.nativeElement.value;
  const td3HDInput = this.td3HDInput.nativeElement.value;
  const td3HFInput = this.td3HFInput.nativeElement.value;
  if(tdthreeInput!=""){
    this.trainingd3.day=tdthreeInput
    this.trainingd3.heureDebut=Number(td3HDInput)
    this.trainingd3.heureFin=Number(td3HFInput)
    this.trainingDays.push(this.trainingd3)
  }
console.log(this.trainingDays)


  let formData = new FormData();
  formData.append('titre', titre);
  formData.append('image', image);
  formData.append('dateDebut', dateDebut);
  formData.append('dateFin', dateFin);
  formData.append('prix', prix);
  formData.append('rue', rue);
  formData.append('codePostal', codePostal);
  formData.append('discipline', discipline);
  formData.append('capacite', capacite);
  formData.append('description', description);
  formData.append('ville', ville);
  formData.append('type', type);
  formData.append( 'trainingday', JSON.stringify( this.trainingDays ) )
console.log(formData.getAll('trainingday'))


  this.AnnonceService.createAnnonce(formData).subscribe({
    next:(result)=>{
      this.toastService.successToast("Ajout avec succès","success")
    },
    error:(erreur)=>{
      console.log(erreur)
    },

    //complete:()=>{this.router.navigate(["dashboard"])},
  })

}

}
