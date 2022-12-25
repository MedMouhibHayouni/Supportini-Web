import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CalendarComponent } from './shared-components/calendar/calendar.component';
import {LayoutsModule} from "../layouts/layouts.module";
import { DashboardComponent } from './dashboard/dashboard.component';



import {ProfilComponent} from "./profil/profil.component";
import {LightgalleryModule} from "lightgallery/angular/13";
import { ProfilSettingComponent } from './profil-setting/profil-setting.component';
import {MeteoComponent} from "./shared-components/meteo/meteo.component";

import {ListAnnounceCoachComponent} from "./coach/liste-annonce-coach/list-announce-coach.component";
import { DetailAnnonceComponent } from './coach/detail-annonce/detail-annonce.component';
import {ModifierAnnonceComponent} from "./coach/modifier-annonce/modifier-annonce.component";

import { AjouterRegimeComponent } from './coach/ajouter-regime/ajouter-regime.component';
import { ItemRegimeComponent } from './coach/item-regime/item-regime.component';
import {AjouterAnnonceComponent} from "./coach/ajouter-annonce/ajouter-annonce.component";
import {ItemAnnonceCoachComponent} from "./coach/item-annonce-coach/item-annonce-coach.component";
import {
  ListeSalleDeSportDashboardComponent
} from "./dashboard/liste-salle-de-sport-dashboard/liste-salle-de-sport-dashboard.component";
import {
  IteamSalleDashboardComponent
} from "./dashboard/liste-salle-de-sport-dashboard/iteam-salle-dashboard/iteam-salle-dashboard.component";

import { SuiviTrainerComponent } from './trainer/suivi-trainer/suivi-trainer.component';
import { StatsComponent } from './trainer/suivi-trainer/stats/stats.component';
import { HistoryComponent } from './trainer/suivi-trainer/history/history.component';
import { SuiviTabComponent } from './trainer/suivi-trainer/suivi-tab/suivi-tab.component';
import {MatTabsModule} from "@angular/material/tabs";
import {CarouselModule} from "primeng/carousel";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import { ListPlanningDashboardComponent } from './dashboard/list-planning-dashboard/list-planning-dashboard.component';
import { ItemPlanningDashboardComponent } from './dashboard/list-planning-dashboard/item-planning-dashboard/item-planning-dashboard.component';
import {NgChartsModule} from "ng2-charts";
import { SuiviCoachComponent } from './coach/suivi-coach/suivi-coach.component';
import { ListEntrComponent } from './coach/suivi-coach/list-entr/list-entr.component';
import { DetailsEntrComponent } from './coach/suivi-coach/details-entr/details-entr.component';
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {NosProduitsComponent} from "./commerce/nos-produits/nos-produits.component";
import {CommerceComponent} from "./commerce/commerce.component";
import {DetailProduitComponent} from "./commerce/detail-produit/detail-produit.component";
import {ListSalleDeSportComponent} from "./list-salle-de-sport/list-salle-de-sport.component";
import {IteamSalleComponent} from "./list-salle-de-sport/iteam-salle/iteam-salle.component";
import {DetailSalleComponent} from "./list-salle-de-sport/detail-salle/detail-salle.component";
import {AddSalleComponent} from "./list-salle-de-sport/add-salle/add-salle.component";
import {ModifierSalleComponent} from "./list-salle-de-sport/modifier-salle/modifier-salle.component";
import {ItemProduitComponent} from "./commerce/nos-produits/item-produit/item-produit.component";
import {MySalleComponent} from "./list-salle-de-sport/my-salle/my-salle.component";
import {MatSliderModule} from "@angular/material/slider";
import {AcceuilComponent} from "./acceuil/acceuil.component";

// import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";

import { TopTenAnnonceComponent } from './dashboard/top-ten-annonce/top-ten-annonce.component';

import { MesAnnonceComponent } from './coach/mes-annonce/mes-annonce.component';
import { ListregimeComponent } from './coach/listregime/listregime.component';
import {ListTrainerAnnonceComponent} from "./coach/list-trainer-annonce/list-trainer-annonce.component";
import {ItemTrainerComponent} from "./coach/list-trainer-annonce/item-trainer/item-trainer.component";
import {FullCalendarModule} from "@fullcalendar/angular";

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import { CoachProfileComponent } from './coach/coach-profile/coach-profile.component';
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";




FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [
    UsersComponent,
    CalendarComponent,
    DashboardComponent,
    ListTrainerAnnonceComponent,
    ItemTrainerComponent,
    ProfilComponent,
    ProfilSettingComponent,
    MeteoComponent,
    ListAnnounceCoachComponent,
    DetailAnnonceComponent,
    ModifierAnnonceComponent,
      AjouterRegimeComponent,
      ItemRegimeComponent,
    AjouterAnnonceComponent,
    ItemAnnonceCoachComponent,
    ListeSalleDeSportDashboardComponent,
    IteamSalleDashboardComponent,
    SuiviTrainerComponent,
    StatsComponent,
    HistoryComponent,
    SuiviTabComponent,
    ListPlanningDashboardComponent,
    ItemPlanningDashboardComponent,
    SuiviCoachComponent,
    ListEntrComponent,
    DetailsEntrComponent,
    ContactComponent,
    AboutUsComponent,
    NosProduitsComponent,
    CommerceComponent,
    DetailProduitComponent,
    ListSalleDeSportComponent,
    IteamSalleComponent,
    DetailSalleComponent,
    AddSalleComponent,
    ModifierSalleComponent,
    ItemProduitComponent,
    MySalleComponent,
    AcceuilComponent,
    TopTenAnnonceComponent,

    MesAnnonceComponent,
    ListregimeComponent,
    CoachProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutsModule,
    LightgalleryModule,
    FormsModule,
    MatTabsModule,
    CarouselModule,
    ButtonModule,
    NgChartsModule,
    MatSliderModule,
    // NgxQRCodeModule,
    FullCalendarModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
  ],
    exports: [
        FormsModule,
        MatSliderModule,
        ItemAnnonceCoachComponent,
    ],

})
export class UsersModule { }
