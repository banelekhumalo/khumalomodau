import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { GalleryComponent } from './gallery';
import { ContactComponent } from './contact';
import { AboutUsComponent } from './about-us';
import { RegisterComponent } from './register';





@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
