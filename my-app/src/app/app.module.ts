import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
