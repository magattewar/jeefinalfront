import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementCreateComponent } from './paiement-create.component';

describe('PaiementCreateComponent', () => {
  let component: PaiementCreateComponent;
  let fixture: ComponentFixture<PaiementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
