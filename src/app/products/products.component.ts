import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductImage_1: string = './assets/Samsung_1.jpg';
  ProductImage_2: string = './assets/Samsung_2.jpg';
  ProductImage_3: string = './assets/Samsung_3.jpg';

  constructor() { }

  ngOnInit() { }

}
