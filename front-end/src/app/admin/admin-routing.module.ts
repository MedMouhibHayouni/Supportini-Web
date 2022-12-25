import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GestionUserComponent} from "./components/gestion-user/gestion-user.component";
import {AdminComponent} from "./admin.component";
import {GestionSalleDeSportComponent} from "./components/gestion-salle-de-sport/gestion-salle-de-sport.component";
import {
  GestionUserModificationComponent
} from "./components/gestion-user-modification/gestion-user-modification.component";
import {GestionProduitComponent} from "./components/gestion-produit/gestion-produit.component";
import {GestionAjoutProduitComponent} from "./components/gestion-ajout-produit/gestion-ajout-produit.component";

import {GuardGuard} from "./components/guard-admin/guard.guard";
import {GestionDesAnnoncesComponent} from "./components/gestion-des-annonces/gestion-des-annonces.component";


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {

        path: 'gestion-user',
        component: GestionUserComponent,
        data: {header: 'Gestion Utilisateurs', route: '/admin/gestion-user'}
      },
      {
        path: 'gestion-salle-de-sport',
        component: GestionSalleDeSportComponent,
        data: {header: 'Gestion salle de sport', route: '/admin/gestion-salle-de-sport'}
      },
      {path: 'gestion-produit', component: GestionProduitComponent},
      {
        path: 'Ajout-Produit',
        component: GestionAjoutProduitComponent,
        data: {header: 'Gestion Produit', route: '/admin/gestion-produit'}
      },


      {
        path: 'gestion-annonces',
        component: GestionDesAnnoncesComponent,
        data: {header: 'Gestion annonce', route: '/admin/gestion-annonces'}
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
