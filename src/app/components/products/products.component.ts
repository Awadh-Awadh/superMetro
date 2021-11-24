import { Component, OnInit } from '@angular/core';
import { IProducts } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showImage : boolean = false
  listFilter = 'cart'

  public products: IProducts[] = [
    {
      'productId':1,
      'productName': 'hammer',
      'productCode': 'nx-34355',
      'releaseDate':'21-04-2012',
      'productAvailable': true,
      'productPrice': 34.99,
      "description": 'nice product to nailling',
      'productRating': 5,
      'imageUrl': 'assets/images/hammer.jpg'
    },
    {
      'productId':2,
      'productName': 'Spade',
      'productCode': 'nf-38775',
      'releaseDate': '22-06-2021',
      'productAvailable': true,
      'productPrice': 20.99,
      "description": 'Nice tool for scooping',
      'productRating': 3,
      'imageUrl': 'assets/images/spade.jpg'
    }
  ]

  toggleImage(): void{
    this.showImage = !this.showImage
  }

  constructor() { }

  ngOnInit(): void {
  }

}
