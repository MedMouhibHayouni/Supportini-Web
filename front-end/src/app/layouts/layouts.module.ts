import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import { BlockHeaderComponent } from './block-header/block-header.component';
import {PanierComponent} from "./panier/panier.component";
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    BlockHeaderComponent,
    PanierComponent,


  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    BlockHeaderComponent,
    PanierComponent,

  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
      NgxPrintModule
    ]
})
export class LayoutsModule { }
