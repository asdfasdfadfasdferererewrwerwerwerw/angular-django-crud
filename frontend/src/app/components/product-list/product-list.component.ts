import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProducts = [];
  products: any;
  currentProduct = true;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): any {
    this.currentProduct = false;
    this.productService.getAllProducts()
        .subscribe(
          response => {
            console.log(response);
            this.allProducts = response;
          },
          error => {
            console.log(error);
        });
  }

  searchByName(): any {
    this.productService.getProductsByName(this.name)
        .subscribe(
          response => {
            console.log(response);
            this.products = response;
          },
          error => {
            console.log(error);
        });
  }

  setCurrentProduct(product: any, i: any): any {
    this.currentProduct = true;
    this.currentIndex = i;
  }

  deleteAllProducts(): any {
    this.productService.deleteAllProducts()
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
        });
  }
}
