import { Component, OnInit } from '@angular/core';
import { CustomerFacadeService } from '../../store/customer-facade.service';

@Component({
  selector: 'app-create-customer-container',
  templateUrl: './create-customer-container.component.html',
  styleUrls: ['./create-customer-container.component.scss'],
})
export class CreateCustomerContainerComponent implements OnInit {
  constructor(private facade: CustomerFacadeService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.facade.onAddItem(form);
  }
}
