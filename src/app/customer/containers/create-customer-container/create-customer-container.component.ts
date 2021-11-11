import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerFacadeService } from '../../store/customer-facade.service';
import { Customer } from '../../store/customer.model';

@Component({
  selector: 'app-create-customer-container',
  templateUrl: './create-customer-container.component.html',
  styleUrls: ['./create-customer-container.component.scss'],
})
export class CreateCustomerContainerComponent implements OnInit, OnDestroy {
  data$: Observable<Customer> = this.facade.selectedCustomer$;
  constructor(
    private facade: CustomerFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.facade.fetchCustomerByid(id);
    }
  }

  onSubmit(form: Customer) {
    if (form.id) {
      this.facade.updateCustomer(form);
    } else {
      this.facade.onAddItem(form);
    }
  }

  onCancel() {
    this.facade.navigateToList();
  }

  ngOnDestroy(): void {
    this.facade.clearCustomerSelect();
  }
}
