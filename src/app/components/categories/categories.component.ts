import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/core/data';
import { ApidataService } from 'src/app/services/apidata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories:category[]=[];
  constructor(private _ApidataService:ApidataService){}
  ngOnInit(): void {
    this._ApidataService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data;
        
      }
    })
  }

}
