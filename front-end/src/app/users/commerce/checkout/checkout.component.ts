import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {panier} from "../../../model/Panier";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
panier!:panier
   paymentHandler!:any

  constructor(private toastService:ToastService) { }

  ngOnInit(): void {
    this.invokeStripe();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MI839JP0PZBvF3JExAxE7yXi5BXIR7GZx82AFFa4ChW1yuZo0E92tGfUcSypjJmy2jTWHpL1u3DRWGRwyquUiCH00FpnMT5qP',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);


      },
    });

    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  showSuccess() {
    this.toastService.successToast('Votre paiement a été fais avec sucées!', 'succes!')
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key:'pk_test_51MI839JP0PZBvF3JExAxE7yXi5BXIR7GZx82AFFa4ChW1yuZo0E92tGfUcSypjJmy2jTWHpL1u3DRWGRwyquUiCH00FpnMT5qP',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

}
