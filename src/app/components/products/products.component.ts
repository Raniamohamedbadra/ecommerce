import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/services/apidata.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ApidataService:ApidataService , private _CartService:CartService){}
  productsData:any[]=[];
  ngOnInit(): void {
    this._ApidataService.getProducts().subscribe({
      next:(response)=>{
        this.productsData= response.data;
      }
    })
  }

  addProduct(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        

      }
    })


  }


}
