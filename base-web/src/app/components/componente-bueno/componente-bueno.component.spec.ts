import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBuenoComponent } from './componente-bueno.component';

describe('ComponenteBuenoComponent', () => {
  let component: ComponenteBuenoComponent;
  let fixture: ComponentFixture<ComponenteBuenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteBuenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
