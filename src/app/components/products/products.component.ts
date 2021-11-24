import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any[] = [
    {
      'productId':1,
      'productName': 'hammer',
      'productCode': 34355,
      'productAvailable': true,
      'productPrice': 34.99,
      'productRating': '5 star'
    },
    {
      'productId':2,
      'productName': 'Spade',
      'productCode': 38775,
      'productAvailable': true,
      'productPrice': 20.99,
      'productRating': '3 star'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
