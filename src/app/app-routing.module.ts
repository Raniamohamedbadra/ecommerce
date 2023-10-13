import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './auth.guard';
import { DetailsproductComponent } from './components/detailsproduct/detailsproduct.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [{path:'',component:BlankLayoutComponent,children:[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"details/:id",canActivate:[authGuard],component:DetailsproductComponent},
  {path:"products",canActivate:[authGuard],component:ProductsComponent},
  {path:"cart",canActivate:[authGuard],component:CartComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent},
]},

  
  {path:'',component:AuthLayoutComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"payment/:id",component:PaymentComponent},

  ]},

  
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
