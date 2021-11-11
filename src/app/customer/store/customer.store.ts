import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CustomerServiceService } from './customer-service.service';
import { CustomerActions } from './customer.action';
import { Customer } from './customer.model';

export interface CustomerStateModel {
  customerList: Customer[];
  selectCustomer: Customer;
}

@State<CustomerStateModel>({
  name: 'customer',
  defaults: {
    customerList: [],
    selectCustomer: null,
  },
})
@Injectable()
export class CustomerState {
  @Selector()
  static customers(state: CustomerStateModel) {
    return state.customerList;
  }

  @Selector()
  static selectCustomer(state: CustomerStateModel) {
    return state.selectCustomer;
  }
  constructor(private service: CustomerServiceService) {}
  @Action(CustomerActions.FetchAll)
  fetchCustomer(
    ctx: StateContext<CustomerStateModel>,
    { filter }: CustomerActions.FetchAll
  ) {
    return this.service.fetchCustomers(filter).pipe(
      tap((resp) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          customerList: resp,
        });
      })
    );
  }

  @Action(CustomerActions.Add)
  addCustomer(
    ctx: StateContext<CustomerStateModel>,
    { payload }: CustomerActions.Add
  ) {
    return this.service.onAddItem(payload);
  }

  @Action(CustomerActions.Edit)
  updateCustomer(
    ctx: StateContext<CustomerStateModel>,
    { payload }: CustomerActions.Edit
  ) {
    return this.service.updateCustomer(payload);
  }

  @Action(CustomerActions.SelectCustomerById)
  fetchCustomerByid(
    ctx: StateContext<CustomerStateModel>,
    { id }: CustomerActions.SelectCustomerById
  ) {
    return this.service.fetchCustomerByid(id).pipe(
      tap((resp) => {
        ctx.patchState({
          selectCustomer: resp,
        });
      })
    );
  }

  @Action(CustomerActions.ClearSelectCustomer)
  ClearCustomerSelect(ctx: StateContext<CustomerStateModel>) {
    ctx.patchState({
      selectCustomer: null,
    });
  }
}
