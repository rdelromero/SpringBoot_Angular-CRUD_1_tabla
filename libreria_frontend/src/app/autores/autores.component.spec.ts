import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresComponent } from './autores.component';

describe('ListaAutoresComponent', () => {
  let component: AutoresComponent;
  let fixture: ComponentFixture<AutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
