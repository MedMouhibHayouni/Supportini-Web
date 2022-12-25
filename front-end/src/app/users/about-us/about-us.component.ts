import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  team = [{
    src: "./assets/images/team/Omar (2).jpg",
    nom: "Tbessi Omar",
    email:"omar.tebessi10@gmail.com"
  },
    {
      src: "./assets/images/team/asma Melliti.jpg",
      nom: "Meliti Asma",
      email:"asma.melliti@esprit.tn"
    },
    {
      src: "./assets/images/team/Hassen Rahali.jpg",
      nom: "Rahali Hassen",
      email:"hassen.rahali@esprit.tn"
    },
    {
      src: "./assets/images/team/Chakiba Barhoumi.jpg",
      nom: "Barhoumi Chakiba",
      email:"chakiba.barhoumi@esprit.tn"
    },
    {
      src: "./assets/images/team/Mouhib Hayouni.jpg",
      nom: "Hayouni Med Mouhib",
      email:"medmouhib.hayouni@esprit.tn"
    }]

  ngOnInit(): void {
  }

}
