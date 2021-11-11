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
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  formInit(data?) {
    this.form = this.fb.group({
      name: data?.name || '',
      companyName: data?.owner || '',
      email: data?.price || '',
      address: data?.address,
    });
  }
  ngOnInit(): void {
    this.formInit();
  }

  submit() {
    this.onSubmit.next(this.form.value);
  }
}
