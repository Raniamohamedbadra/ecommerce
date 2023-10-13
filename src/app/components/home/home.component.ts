import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { category } from 'src/app/core/data';
import { ApidataService } from 'src/app/services/apidata.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsData:any[]=[];
  categories:category[]=[];
  constructor(private _ApidataService:ApidataService,private _CartService:CartService){}
  ngOnInit(): void {
    this._ApidataService.getProducts().subscribe({
      next:(response)=>{
        this.productsData = response.data;
      }
    })

    this._ApidataService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data;
        
      }
    })
      
  }
  catSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    nav: true
  }

  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        

      }
    })


  }

}


