import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsDemoService } from '../rxjs-demo.service';

@Component({
  selector: 'app-rxjs-demo',
  standalone: false,
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  currentProduct: any;
  private subscriptions: Subscription = new Subscription();

  constructor(private rxjsDemoService: RxjsDemoService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.rxjsDemoService.getProducts().subscribe(data => {
        this.products = data;
      })
    );

    this.subscriptions.add(
      this.rxjsDemoService.getFilteredProducts().subscribe(data => {
        this.filteredProducts = data;
      })
    );

    this.subscriptions.add(
      this.rxjsDemoService.getProductStream().subscribe(data => {
        this.currentProduct = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
