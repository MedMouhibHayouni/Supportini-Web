import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GestionUserComponent } from './components/gestion-user/gestion-user.component';

import {LayoutsModule} from "../layouts/layouts.module";
import { GestionSalleDeSportComponent } from './components/gestion-salle-de-sport/gestion-salle-de-sport.component';
import { GestionUserModificationComponent } from './components/gestion-user-modification/gestion-user-modification.component';
import {FormsModule} from "@angular/forms";

import { GestionSalleDeSportModificationComponent } from './components/gestion-salle-de-sport-modification/gestion-salle-de-sport-modification.component';

import { GestionAjoutProduitComponent } from './components/gestion-ajout-produit/gestion-ajout-produit.component';
import { GestionProduitComponent } from './components/gestion-produit/gestion-produit.component';

import { FilterPipe } from './shared-pipe/userPipe/filter.pipe';

import {
    GestionModifierProduitComponent
} from "./components/gestion-modifier-produit/gestion-modifier-produit.component";
import { GestionDesAnnoncesComponent } from './components/gestion-des-annonces/gestion-des-annonces.component';





@NgModule({
    declarations: [
        AdminComponent,
        GestionUserComponent,
        GestionSalleDeSportComponent,
        GestionUserModificationComponent,

        GestionSalleDeSportModificationComponent,

        GestionAjoutProduitComponent,
        GestionProduitComponent,

    FilterPipe,

        GestionModifierProduitComponent,
          GestionDesAnnoncesComponent,


    ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutsModule,
    FormsModule
  ],

})
export class AdminModule { }
