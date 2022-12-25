import { Component, OnInit, Renderer2 } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shared-service/authService/auth.service";
import {User} from "../model/user";
import {ToastService} from "../shared-service/toastService/toast.service";
import {Emitters} from "../emitter/EmitterAuth";

import {UserService} from "../shared-service/userService/user.service";

import {ScriptServiceService} from "../script.service";
const SCRIPT_PATH_LIST =[

  "../../assets/bundles/mainscripts.bundle.js",
  "../../assets/bundles/libscripts.bundle.js",
  "../../assets/vendor/dropify/js/dropify.js",
  "../../assets/bundles/c3.bundle.js",
  "../../assets/bundles/vendorscripts.bundle.js",
  "../../assets/js/dropify.js",
  "../../assets/js/index.js",

]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

user!:User
  authentified!:boolean
  constructor(private router: Router,private  act:ActivatedRoute,  private renderer: Renderer2,

             private authService:AuthService,private ScriptServiceService: ScriptServiceService,private userService:UserService) {




  }
  titleHeaderPage!: string
  route!: string
  titleSecondPage!: string

  ngOnInit(): void {
    SCRIPT_PATH_LIST.forEach(e=> {
      const scriptElement = this.ScriptServiceService.loadJsScript(this.renderer, e);
      scriptElement.onload = () => {
        console.log('loaded');

      }
      scriptElement.onerror = () => {
        console.log('Could not load the script!');
      }
    })
    this.getCurrentUser()
   Emitters.authEmitter.subscribe((res)=>
   this.authentified=res)

  }
  changeTitleHeader (){
    setTimeout(() => {
      this.titleHeaderPage=this.act.snapshot.firstChild?.data['header']
      this.route=this.act.snapshot.firstChild?.data['route']
      this.titleSecondPage=this.act.snapshot.firstChild?.data['second']
    })

  }
  getCurrentUser (){


  this.authService.getCurrentUser().subscribe(
    {
      next: (result: any) => {

        localStorage.setItem('user',JSON.stringify(result.user))

       this.
        userService.updateStore(result.user)
 

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

//
}
