import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {
  private products = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 50 },
    { id: 3, name: 'Jacket', price: 100 },
    { id: 4, name: 'Sneakers', price: 80 }
  ];

  constructor() {}

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getFilteredProducts(): Observable<any[]> {
    return of(this.products).pipe(
      map(products => products.filter(product => product.price > 30))
    );
  }

  getProductStream(): Observable<any> {
    return interval(3000).pipe(
      map(index => this.products[index % this.products.length]) 
    );
  }
}
