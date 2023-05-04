import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CheckmarkComponent } from './components/checkmark/checkmark.component';
import { EnergyMenuComponent } from './components/energy-menu/energy-menu.component';
import { EnergyInfoComponent } from './components/energy-info/energy-info.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    CheckmarkComponent,
    EnergyMenuComponent,
    EnergyInfoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
