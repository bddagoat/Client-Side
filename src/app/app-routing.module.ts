import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { SubmitArtComponent } from './submit-art/submit-art.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'search', component:  SearchComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'SubmitArt', component: SubmitArtComponent},
  {path: 'Payment', component: PaymentComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'CreateProfile', component: CreateProfileComponent},
  {path: 'Login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
