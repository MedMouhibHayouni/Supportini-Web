import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../shared-service/toastService/toast.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastService:ToastService) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastService.successToast('Votre formulaire à été envoyée avec succès!', 'merci!')
  }

}
