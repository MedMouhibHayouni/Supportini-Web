
import {Component, OnInit, Renderer2} from '@angular/core';
import {User} from "./model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "./shared-service/authService/auth.service";


import {Emitters} from "./emitter/EmitterAuth";
import {Subscription} from "rxjs";

import {UserService} from "./shared-service/userService/user.service";


import {CalendarOptions} from "@fullcalendar/angular";

import {ScriptServiceService} from "./script.service";
import {ToastService} from "./shared-service/toastService/toast.service";
const SCRIPT_PATH_LIST =[

  "../assets/bundles/mainscripts.bundle.js",
  "../assets/bundles/libscripts.bundle.js",
  "../assets/vendor/dropify/js/dropify.js",
  "../assets/bundles/vendorscripts.bundle.js",
  "../assets/js/dropify.js",
  "../assets/js/index.js",

]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  title = 'my-dream-app';
  private subscriptionName: Subscription;
  user!:User
  authentified!:boolean
  constructor(private router: Router,private  act:ActivatedRoute,  private renderer: Renderer2,

              private authService:AuthService,private toastService:ToastService , private userService : UserService,private ScriptServiceService: ScriptServiceService) {


    this.subscriptionName= this.authService.getAuthentified().subscribe
    (auth => { //message contains the data sent from service
      this.authentified = auth;
    });

  }

  ngOnInit(): void {
    // SCRIPT_PATH_LIST.forEach(e=> {
    //   const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
    //   scriptElement.onload = () => {
    //     console.log('loaded');
    //
    //   }
    //   scriptElement.onerror = () => {
    //     console.log('Could not load the script!');
    //   }
    //
    // })
    this.getCurrentUser()


  }
  getCurrentUser (){


    this.authService.getCurrentUser().subscribe(
      {
        next: (result: any) => {
          localStorage.setItem('user',JSON.stringify(result.user))

           this.userService.updateStore(result.user)

          this.authService.sendAuthentified(true)
          Emitters.authEmitter.emit(true)
        },
        error: (err: any) => {



          Emitters.authEmitter.emit(false)
          localStorage.clear()
        },
        complete: () => {
          console.log('complete');
        }
      })
  }
  }
