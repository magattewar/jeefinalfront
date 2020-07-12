import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFactureUpdateComponent } from './etat-facture-update.component';

describe('EtatFactureUpdateComponent', () => {
  let component: EtatFactureUpdateComponent;
  let fixture: ComponentFixture<EtatFactureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatFactureUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFactureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
