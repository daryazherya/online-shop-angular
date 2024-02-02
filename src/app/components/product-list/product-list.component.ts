import { Component } from '@angular/core';
import { Products } from '../../modules/products';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [
    NgFor, 
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    ],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

    products!: Products[];
    productsSubscription!: Subscription;
    constructor (private ProductsService: ProductsService) {}
    favoriteProducts!: [];
  
    ngOnInit() {
        this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => {
            this.products = data;
            
        })
    }

    addToFavorites(product: {}) {
        console.log('hello', product)
        // this.favoriteProducts.push(product)
        
    }

    ngOnDestroy() {
        if(this.productsSubscription) {
            this.productsSubscription.unsubscribe();
        }
    }
}


