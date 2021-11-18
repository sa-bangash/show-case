import { Component, OnInit } from '@angular/core';
import { SaleFacadeService } from '../../store/sale-facade.service';
import { Product } from '../../store/product.model';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.scss'],
})
export class ItemListContainerComponent implements OnInit {
  itemList$ = this.facade.items$;
  cartItems$ = this.facade.cartItems$;
  total$ = this.facade.total$;
  constructor(private facade: SaleFacadeService) {}

  ngOnInit(): void {
    this.facade.fetchItem();
  }

  addToCart(item: Product) {
    this.facade.addToCart(item);
  }
  onCheckoutClick() {
    this.facade.navigateToCheckout();
  }
}
