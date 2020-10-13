import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { GalleryComponent } from './gallery';
import { ContactComponent } from './contact';
import { AboutUsComponent } from './about-us';
import { RegisterComponent } from './register';


const routes: Routes = [

  { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'register', component: RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
