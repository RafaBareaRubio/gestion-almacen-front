import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetallesComponent } from './ruta-detalle.component';

describe('RutaDetallesComponent', () => {
  let component: RutaDetallesComponent;
  let fixture: ComponentFixture<RutaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
