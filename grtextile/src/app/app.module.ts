import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { ProductComponent } from './components/product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { CategorychooserComponent } from './components/categorychooser/categorychooser.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { KidsComponent } from './components/kids/kids.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { AddproductComponent } from "./components/addproduct/addproduct.component";
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ChatcomComponent } from './components/chatcom/chatcom.component';
import { AdminchatComponent } from './components/adminchat/adminchat.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ImagesliderComponent,
    CategorychooserComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ProductcardComponent,
    AddproductComponent,
    AdminpanelComponent,
    AdminloginComponent,
    ChatcomComponent,
    AdminchatComponent,
    AboutusComponent,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
