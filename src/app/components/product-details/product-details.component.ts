import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  allProducts = [
    {
      id: '1',
      name: 'product 1',
      description: 'description 1',
      available: false
    },
    {
      id: '2',
      name: 'product 2',
      description: 'description 2',
      available: false
    },
    {
      id: '3',
      name: 'product 3',
      description: 'description 3',
      available: false
    },
    {
      id: '4',
      name: 'product 4',
      description: 'description 4',
      available: false
    },
    {
      id: '5',
      name: 'product 5',
      description: 'description 5',
      available: false
    },
    {
      id: '6',
      name: 'product 6',
      description: 'description 6',
      available: false
    }
  ]
  currentproduct = null;
  message = '';
  currentProduct = {
    id: '',
    name: '',
    description: '',
    available: false
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'))
  }

  getProduct(id: any): void {
    console.log(id);
    this.allProducts.map((product) => {
      if(product.id.toString() === id.toString()) {
        console.log('same', product);
        this.currentProduct = product;
      }
    });    
    // this.productService.getProducts(id)
    //     .subscribe(
    //       product => {
    //         console.log(product);
    //         this.currentProduct = product;
    //       },
    //       error => {
    //         console.log(error);
    //     });
}

  updateProduct(): void {
    this.productService.updateProducts(this.currentProduct.id, this.currentProduct)
        .subscribe(
          response => {
            console.log(response);
            this.message = "The product successfully updated!";
          },
          error => {
            console.log(error);
        });
  }

  deleteProduct(): void {
    this.productService.deleteProducts(this.currentProduct.id)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'You deleted the product!';
          },
          error => {
            console.log(error);
        });
  }

  setAvailableStatus(state: boolean): void {
    const data = {
      name: this.currentProduct.name,
      description: this.currentProduct.description,
      abailable: state
    }

    this.productService.updateProducts(this.currentProduct.id, data)
        .subscribe(
          response => {
            this.currentProduct.available = state
            console.log(response);
          },
          error => {
            console.log(error);
        });
  }
}
