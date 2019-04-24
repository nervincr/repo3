import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMaloComponent } from './componente-malo.component';

describe('ComponenteMaloComponent', () => {
  let component: ComponenteMaloComponent;
  let fixture: ComponentFixture<ComponenteMaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteMaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
