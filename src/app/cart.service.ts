import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Product[] = [];
  constructor(private http: HttpClient) {}

  // add item in the cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // get items in the cart
  getItems() {
    return this.items;
  }

  // clear items
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '../assets/shipping.json'
    );
  }
}
