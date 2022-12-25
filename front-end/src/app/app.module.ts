import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './layouts/not-found/not-found.component';

import {MatIconModule} from '@angular/material/icon';
import {LightgalleryModule} from "lightgallery/angular/13";
import {AdminModule} from './admin/admin.module';
import {LayoutsModule} from './layouts/layouts.module';
import {UsersModule} from "./users/users.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {UniversalAppInterceptorInterceptor} from "./interceptor/universal-app-interceptor.interceptor";
import {LoginComponent} from "./authentification/components/login/login.component";
import {RegisterComponent} from "./authentification/components/register/register.component";
import {ChoiceActorComponent} from "./authentification/components/choice-actor/choice-actor.component";
import {
  PersonnelInformationComponent
} from "./authentification/components/personnel-information/personnel-information.component";
import {ForgetPasswordComponent} from "./authentification/components/forget-password/forget-password.component";
import {ResetPasswordComponent} from "./authentification/components/reset-password/reset-password.component";
import {LoginAdminComponent} from "./authentification/components/login-admin/login-admin.component";




@NgModule({

    declarations: [
        AppComponent,
        LoginComponent,
      RegisterComponent,
      ChoiceActorComponent,
      PersonnelInformationComponent,
      ForgetPasswordComponent,
      RegisterComponent,
      ResetPasswordComponent,
      LoginAdminComponent,
        NotFoundComponent,



    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatIconModule,
        LightgalleryModule,

        AdminModule,
         LayoutsModule,
        UsersModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            progressBar: true,
            progressAnimation: 'increasing',
            preventDuplicates: true
        }),
        HttpClientModule,
        LayoutsModule,


    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptorInterceptor, multi: true}],
    exports: [

    ],

    bootstrap: [AppComponent]

})
export class AppModule {
}
