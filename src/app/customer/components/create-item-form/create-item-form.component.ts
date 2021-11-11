import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../store/customer.model';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.scss'],
})
export class CreateItemFormComponent implements OnInit {
  @Input() data: Customer;
  @Output() onSubmit = new EventEmitter<Customer>();
  @Output() onCancel = new EventEmitter();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  formInit(data?) {
    this.form = this.fb.group({
      name: data?.name || '',
      companyName: data?.companyName || '',
      email: data?.email || '',
      address: data?.address,
    });
  }
  ngOnInit(): void {
    this.formInit(this.data);
  }

  submit() {
    let data = this.form.value;
    if (this.data) {
      data = {
        ...data,
        id: this.data.id,
      };
    }
    this.onSubmit.next(data);
  }

  cancel() {
    this.onCancel.next();
  }
}
