import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import {CalendarComponent} from "./shared-components/calendar/calendar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfilComponent} from "./profil/profil.component";
import {ProfilSettingComponent} from "./profil-setting/profil-setting.component";
import {AjouterAnnonceComponent} from "./coach/ajouter-annonce/ajouter-annonce.component";
import {ListAnnounceCoachComponent} from "./coach/liste-annonce-coach/list-announce-coach.component";

import {AjouterRegimeComponent} from "./coach/ajouter-regime/ajouter-regime.component";
import {ItemRegimeComponent} from "./coach/item-regime/item-regime.component";
import {
  ListeSalleDeSportDashboardComponent
} from "./dashboard/liste-salle-de-sport-dashboard/liste-salle-de-sport-dashboard.component";
import {DetailAnnonceComponent} from "./coach/detail-annonce/detail-annonce.component";
import {SuiviTrainerComponent} from "./trainer/suivi-trainer/suivi-trainer.component";
import {StatsComponent} from "./trainer/suivi-trainer/stats/stats.component";
import {HistoryComponent} from "./trainer/suivi-trainer/history/history.component";
import {ItemAnnonceCoachComponent} from "./coach/item-annonce-coach/item-annonce-coach.component";


import {AnnonceGuardGuard} from "./coach/guardAnnonce/annonce-guard.guard";

import {GuardDashboardGuard} from "./guard/guard-dashboard.guard";

import {ModifierAnnonceComponent} from "./coach/modifier-annonce/modifier-annonce.component";


import {SuiviCoachComponent} from "./coach/suivi-coach/suivi-coach.component";
import {ListEntrComponent} from "./coach/suivi-coach/list-entr/list-entr.component";
import {DetailsEntrComponent} from "./coach/suivi-coach/details-entr/details-entr.component";
import {ListTrainerAnnonceComponent} from "./coach/list-trainer-annonce/list-trainer-annonce.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ListSalleDeSportComponent} from "./list-salle-de-sport/list-salle-de-sport.component";
import {MySalleComponent} from "./list-salle-de-sport/my-salle/my-salle.component";
import {DetailSalleComponent} from "./list-salle-de-sport/detail-salle/detail-salle.component";
import {GuardSalleGuard} from "./list-salle-de-sport/guard-salle/guard-salle.guard";
import {AddSalleComponent} from "./list-salle-de-sport/add-salle/add-salle.component";
import {CommerceComponent} from "./commerce/commerce.component";
import {NosProduitsComponent} from "./commerce/nos-produits/nos-produits.component";
import {DetailProduitComponent} from "./commerce/detail-produit/detail-produit.component";
import {PanierComponent} from "../layouts/panier/panier.component";
import {MesAnnonceComponent} from "./coach/mes-annonce/mes-annonce.component";
import {ListregimeComponent} from "./coach/listregime/listregime.component";
import {CoachProfileComponent} from "./coach/coach-profile/coach-profile.component";
import {CheckoutComponent} from "./commerce/checkout/checkout.component";






const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    {path: 'calendar', component: CalendarComponent},
    {path:'profil',component:ProfilComponent,data:{header:'Profile'}},
    {path:'setting',component:ProfilSettingComponent,data:{header:'Profile',second:'Paramétre',route:'profil'}},
    {path: 'dashboard', component: DashboardComponent,data:{header: 'Tableau de Bords'}},
    {path: 'liste-annonce', component: ListAnnounceCoachComponent,data:{header:'Offres entrainement'}},
    {path:'ajouter-annonce',component:AjouterAnnonceComponent,data:{header:'Offres entrainement',second:'Ajouter une annonce',route:'liste-annonce'}},
    {path: 'detail-annonce/:id', component: DetailAnnonceComponent,canActivate:[AnnonceGuardGuard],data:{header:'Offres entrainement',second:'Detail  annonce',route:'liste-annonce'}},
    {path: 'ajouter-regime/:id', component: AjouterRegimeComponent},
    {path: 'List-regime/:id', component: ListregimeComponent},
    {path: 'item-regime', component: ItemRegimeComponent},
    {path: 'item-annonce', component: ItemAnnonceCoachComponent},
    {path: 'mes-annonces', component: MesAnnonceComponent,data:{header:'Mon espace ',second:'Mes annonces',route:'dashboard'}},
    {path: 'listparticipant/:id', component: ListTrainerAnnonceComponent},

    {path: 'modifierannonce/:id', component: ModifierAnnonceComponent},

    {path:'ajouter-annonce',component:AjouterAnnonceComponent,data:{header:'Offres entrainement',second:'Ajouter une annonce',route:'liste-annonce'}},
    {path:'detail-annonce',component:DetailAnnonceComponent},

    {path: 'liste-salle', component: ListeSalleDeSportDashboardComponent,data:{header:'Tableau de Bords'}},

    {path: 'suiviTrainer', component: SuiviTrainerComponent,data:{header:'Suivi'}, children: [
      {path: 'histo', component: HistoryComponent,data:{header:'Suivi',second:'Historique',route:'suivi'}},
      {path: 'stats', component: StatsComponent,data:{header:'Suivi',second:'Stats',route:'suivi'}}
      ]
    },
    {path: 'suiviCoach', component: SuiviCoachComponent,data:{header:'Suivi'}, children: [
        {path: 'details', component: DetailsEntrComponent,data:{header:'Suivi',second:'Details',route:'suivi'}},
        {path: 'listEntr', component: ListEntrComponent,data:{header:'Suivi',second:'Stats',route:'suivi'}}
      ]
    },
    {path: 'acceuil', component: AcceuilComponent,data:{header:'Acceuil'}},
    {path:'contact',component:ContactComponent,data:{header:'Contact'}},
    {path:'about-us',component:AboutUsComponent,data:{header:'À Propos'}},
    {path: 'liste-salle', component: ListeSalleDeSportDashboardComponent,data:{header:'Tableau de Bords'}},
    {path:'list-salle-de-sport',component:ListSalleDeSportComponent,data:{header:'Salles de Sport'}},
    {path:'my-gym',component:MySalleComponent,data:{header:' Mes Salles de Sport'}},
    {path:'detail-salle/:id',component:DetailSalleComponent,canActivate:[GuardSalleGuard],data:{header:'Salles de Sport',second:'Detail',route:'list-salle-de-sport'}},
    {path:'ajout-salle',component:AddSalleComponent,data:{header:'Salles de Sport',second:'Ajouter',route:'list-salle-de-sport'}},
    {path:'Nos-Produits',component:CommerceComponent,data:{header:'Produits'}},
    {path:'liste-Produit',component:NosProduitsComponent},
    {path:'detail-Produit/:id',component:DetailProduitComponent,data:{header:'Produits',second:'Detail',route:'Nos-Produits' }},
    {path :'Panier' ,component:PanierComponent,data:{header:'Detail',second: 'Panier', route: 'detail-Produit'}},
    {path: 'coach-profile/:id', component: CoachProfileComponent},
    {path:'Paiement',component:CheckoutComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
