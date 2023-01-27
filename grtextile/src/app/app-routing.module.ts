import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorychooserComponent } from './components/categorychooser/categorychooser.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { KidsComponent } from './components/kids/kids.component';

import { LoginComponent } from './components/login/login.component';
import { MenComponent } from './components/men/men.component';
import { SignComponent } from './components/sign/sign.component';
import { WomenComponent } from './components/women/women.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ChatcomComponent } from './components/chatcom/chatcom.component';
import { AdminchatComponent } from './components/adminchat/adminchat.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'header',component:HeaderComponent},
  {path:'imageslider',component:ImagesliderComponent},
  {path:'footer',component:FooterComponent},
  {path:'categorychooser',component:CategorychooserComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'chatcom',component:ChatcomComponent},
  {path:'adminchat',component:AdminchatComponent},
  {path:'aboutus',component:AboutusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
