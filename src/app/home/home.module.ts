import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { OtrospuntosdeinteresComponent } from '../components/otrospuntosdeinteres/otrospuntosdeinteres.component';
import { DondecomerComponent } from '../components/dondecomer/dondecomer.component';
import { MonumentosComponent } from '../components/monumentos/monumentos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,OtrospuntosdeinteresComponent,DondecomerComponent,MonumentosComponent]
})
export class HomePageModule {}
