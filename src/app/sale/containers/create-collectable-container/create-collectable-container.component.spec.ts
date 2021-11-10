import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectableContainerComponent } from './create-collectable-container.component';

describe('CreateCollectableContainerComponent', () => {
  let component: CreateCollectableContainerComponent;
  let fixture: ComponentFixture<CreateCollectableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCollectableContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollectableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
