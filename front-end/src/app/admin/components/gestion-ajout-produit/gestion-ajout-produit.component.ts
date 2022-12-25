import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {produit} from "../../../model/produit";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";
import {categorie} from "../../../model/categorie";
import {User} from "../../../model/user";
declare var $: any;
@Component({
  selector: 'app-gestion-ajout-produit',
  templateUrl: './gestion-ajout-produit.component.html',
  styleUrls: ['./gestion-ajout-produit.component.css']
})
export class GestionAjoutProduitComponent implements OnInit {
  @ViewChild('nomproduitInput') nomproduitInput!: ElementRef;
  @ViewChild('prixInput') prixInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('quantiteInput') quantiteInput!: ElementRef;
@ViewChild('categorieIdInput') categorieIdInput!:ElementRef;


  produit!: produit
  id!: any
  prod!: produit[]
  categories: any=[];
  SelectedValue!: any;

  selectedFiles?:FileList
  previews: string[] = [];


  constructor(private toastService: ToastService,
              private produitservice: ProduitserviceService,
              private prodcatserv: ProduitserviceService
  ) {



      //this.categories = data.categories;



  }


  ngOnInit(): void {
    this.prodcatserv.getallcategorie().subscribe((data) => {


      this.categories = data.categories || [{id:1 ,nom :"Fitness"},{id:2,nom:"Musculation"},{id:3,nom:"Cross-fit"},{id:4,nom:"gymnas"}];


    })
    this.produit = new produit();

    $(() => {
      $('.dropify').dropify({
        tpl: {
          wrap: '<div class="dropify-wrapper"></div>',
          loader: '<div class="dropify-loader"></div>',
          message: '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos pour votre Produit</p></div>',
          preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Ajouter une autre photo</p></div></div></div>',
          filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton: '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine: '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>',
        }
      })


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

  createProduit() {
    if (this.selectedFiles) {
      const nomproduit = this.nomproduitInput.nativeElement.value;
      const prix = this.prixInput.nativeElement.value;
      const description = this.descriptionInput.nativeElement.value;
      const quantite = this.quantiteInput.nativeElement.value;
      const categorieId=this.categorieIdInput.nativeElement.value;
      const formData: FormData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {

        formData.append('imagesProduits[]', this.selectedFiles[i]);

      }
      formData.set('nomproduit' , nomproduit);
      formData.set('prix' , prix);
      formData.set('description' , description);
      formData.set('quantite' , quantite);
      formData.set( 'categorieId',categorieId)

      this.produitservice.createProduct(formData).subscribe({
      })

    }else {
      this.toastService.errorToast("Images Obligatoire", "Erreur")
    }
    }


  showSuccess() {
    this.toastService.successToast('Ajout de produit avec succèss!', 'succes!')
  }

  createProduct() {
    this.produitservice.createProduct(this.produit).subscribe();
    console.log(this.produitservice)
  }

 }
