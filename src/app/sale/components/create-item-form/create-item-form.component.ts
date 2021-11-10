import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sale } from '../../store/sale.model';

@Component({
  selector: 'app-create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.scss'],
})
export class CreateItemFormComponent implements OnInit {
  @Input() data: Sale;
  @Output() onSubmit = new EventEmitter<Sale>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  formInit(data?) {
    this.form = this.fb.group({
      name: data?.name || '',
      owner: data?.owner || '',
      price: data?.price || '',
    });
  }
  ngOnInit(): void {
    this.formInit();
  }

  submit() {
    this.onSubmit.next(this.form.value);
  }
}
