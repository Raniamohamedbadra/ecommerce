import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/services/apidata.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.scss'],
})
export class DetailsproductComponent implements OnInit {
  productId:any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _ApidataService:ApidataService,private _CartService:CartService) {}


  productDetails:any = {};



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
      },
    });
    this._ApidataService.getProductsById(this.productId).subscribe({
      next:(response)=>{
        this.productDetails = response.data;
        

      }
    })
  }
  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    nav: false
  }




  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        

      }
    })


  }
}
