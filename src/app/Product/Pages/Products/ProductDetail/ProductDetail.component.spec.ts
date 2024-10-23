import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail } from './ProductDetail.component';

describe('ViewProductComponent', () => {
  let component: ProductDetail;
  let fixture: ComponentFixture<ProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
