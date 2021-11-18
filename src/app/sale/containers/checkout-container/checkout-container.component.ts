import { Component, OnInit } from '@angular/core';
import { SaleFacadeService } from '../../store/sale-facade.service';

@Component({
  selector: 'app-checkout-container',
  templateUrl: './checkout-container.component.html',
  styleUrls: ['./checkout-container.component.scss'],
})
export class CheckoutContainerComponent implements OnInit {
  cartItems$ = this.facade.cartItems$;
  total$ = this.facade.total$;
  constructor(private facade: SaleFacadeService) {}

  ngOnInit(): void {}
  onConfirm() {
    this.facade.onBuy();
  }
}
