import {Component, Input, OnInit} from '@angular/core';
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";


@Component({
  selector: 'app-iteam-salle',
  templateUrl: './iteam-salle.component.html',
  styleUrls: ['./iteam-salle.component.css']
})
export class IteamSalleComponent implements OnInit {
  // title ='extraqrcode';
  // elementType = NgxQrcodeElementTypes.URL
  // value = ''

 @Input()gyms!:any
  constructor(private salleDeSportService:SalleDeSportService) { }
   id!:any;
 gymId!:any;
 imageSalle!:any;
  imagesGym!:any;
  ngOnInit(): void {
// this.salleDeSportService.getGymById(this.id).subscribe(
//   (data)=> {this.gyms=data;
//   })
//     this.salleDeSportService.getImagesGym(this.gyms.id).subscribe(
//       (data) => {this.imagesGym = data
//         let imageImage = new FormData();
//         // let imageGymNew = this.imagesGym.images.getItem('imageVitrine');
//         });
  }




}
