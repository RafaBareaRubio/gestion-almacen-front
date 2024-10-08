import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetallesComponent } from './empleado-detalle.component';

describe('EmpleadoDetallesComponent', () => {
  let component: EmpleadoDetallesComponent;
  let fixture: ComponentFixture<EmpleadoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
