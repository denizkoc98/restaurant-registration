import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedialogComponent } from './purchasedialog.component';

describe('PurchasedialogComponent', () => {
  let component: PurchasedialogComponent;
  let fixture: ComponentFixture<PurchasedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
