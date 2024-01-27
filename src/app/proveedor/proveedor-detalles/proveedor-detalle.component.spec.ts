import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDetallesComponent } from './proveedor-detalle.component';

describe('ProveedorDetallesComponent', () => {
  let component: ProveedorDetallesComponent;
  let fixture: ComponentFixture<ProveedorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
