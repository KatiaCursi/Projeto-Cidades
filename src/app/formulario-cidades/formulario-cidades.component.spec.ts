import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCidadesComponent } from './formulario-cidades.component';

describe('FormularioCidadesComponent', () => {
  let component: FormularioCidadesComponent;
  let fixture: ComponentFixture<FormularioCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
