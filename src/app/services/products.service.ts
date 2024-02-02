import { Injectable } from '@angular/core';
import { Products } from '../modules/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    url: string = 'http://localhost:3000/products'

    constructor(private http: HttpClient) {}
    
    getProducts() {
        console.log(this.http.get<Products[]>(this.url))
        return this.http.get<Products[]>(this.url)
    }

}
