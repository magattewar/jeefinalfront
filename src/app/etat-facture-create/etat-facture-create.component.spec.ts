import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFactureCreateComponent } from './etat-facture-create.component';

describe('EtatFactureCreateComponent', () => {
  let component: EtatFactureCreateComponent;
  let fixture: ComponentFixture<EtatFactureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatFactureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFactureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
