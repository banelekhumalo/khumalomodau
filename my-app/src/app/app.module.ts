import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { GalleryComponent } from './gallery';
import { ContactComponent } from './contact';
import { AboutUsComponent } from './about-us';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
   
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
