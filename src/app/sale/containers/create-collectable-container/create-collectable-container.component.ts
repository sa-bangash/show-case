import { Component, OnInit } from '@angular/core';
import { SaleFacadeService } from '../../store/sale-facade.service';

@Component({
  selector: 'app-create-collectable-container',
  templateUrl: './create-collectable-container.component.html',
  styleUrls: ['./create-collectable-container.component.scss'],
})
export class CreateCollectableContainerComponent implements OnInit {
  constructor(private facade: SaleFacadeService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this.facade.onAddItem(form);
  }
}
