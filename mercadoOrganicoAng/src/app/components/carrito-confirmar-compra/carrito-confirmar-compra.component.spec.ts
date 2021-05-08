import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoConfirmarCompraComponent } from './carrito-confirmar-compra.component';

describe('CarritoConfirmarCompraComponent', () => {
  let component: CarritoConfirmarCompraComponent;
  let fixture: ComponentFixture<CarritoConfirmarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoConfirmarCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoConfirmarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
