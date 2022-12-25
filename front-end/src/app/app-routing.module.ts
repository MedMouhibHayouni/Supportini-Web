import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from "./layouts/not-found/not-found.component";
import {LoginComponent} from "./authentification/components/login/login.component";
import {RegisterComponent} from "./authentification/components/register/register.component";
import {AuthGuardGuard} from "./authentification/guard/auth-guard.guard";
import {ForgetPasswordComponent} from "./authentification/components/forget-password/forget-password.component";
import {ChoiceActorComponent} from "./authentification/components/choice-actor/choice-actor.component";
import {
  PersonnelInformationComponent
} from "./authentification/components/personnel-information/personnel-information.component";
import {LoginAdminComponent} from "./authentification/components/login-admin/login-admin.component";
import {ResetPasswordComponent} from "./authentification/components/reset-password/reset-password.component";


const routes: Routes = [
  {path: '', redirectTo: '/acceuil', pathMatch: 'full'},

  {path: 'login-admin', component: LoginAdminComponent, canActivate: [AuthGuardGuard]},
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },

  {path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'password-reset/:id/:token', component: ResetPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardGuard]},
  {path: 'forget_pwd', component: ForgetPasswordComponent},

  {path: 'choice-profil', component: ChoiceActorComponent},
  {path: 'personnel-info', component: PersonnelInformationComponent},



  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
