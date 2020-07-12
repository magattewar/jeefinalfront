import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCommandeCreateComponent } from './etat-commande-create.component';

describe('EtatCommandeCreateComponent', () => {
  let component: EtatCommandeCreateComponent;
  let fixture: ComponentFixture<EtatCommandeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatCommandeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatCommandeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
