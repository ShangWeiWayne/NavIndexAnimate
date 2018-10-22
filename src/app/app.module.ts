import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ItemsService } from './services/items.service';

@NgModule({
   declarations: [
      AppComponent,
      ItemComponent,
      ItemsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [
    ItemsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
