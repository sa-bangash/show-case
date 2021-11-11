import { Customer } from './customer.model';

export namespace CustomerActions {
  export class Add {
    static readonly type = '[Customer] Add';
    constructor(public payload: Customer) {}
  }
  export class Edit {
    static readonly type = '[Todo] Edit';
    constructor(public payload: Customer) {}
  }
  export class FetchAll {
    static readonly type = '[Customer] Fetch All';
    constructor(public filter: string) {}
  }

  export class SelectCustomerById {
    static readonly type = '[Customer] Select custoemr ';
    constructor(public id: number) {}
  }

  export class ClearSelectCustomer {
    static readonly type = '[Customer] Clear customer select';
  }
  // export class Delete {
  //   static readonly type = '[Todo] Delete';
  //   constructor(public id: number) {}
  // }
}
