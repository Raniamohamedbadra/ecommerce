import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { CoreComponent } from './core/core.component';
import { CuttextPipe } from './core/cuttext.pipe';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './components/payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    CategoriesComponent,
    LoginComponent,
    ProductsComponent,
    BrandsComponent,
    RegisterComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NotfoundComponent,
    CoreComponent,
    CuttextPipe,
    DetailsproductComponent,
    PaymentComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
