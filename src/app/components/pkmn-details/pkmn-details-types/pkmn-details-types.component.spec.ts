import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailsTypesComponent } from './pkmn-details-types.component';

describe('PkmnDetailsTypesComponent', () => {
  let component: PkmnDetailsTypesComponent;
  let fixture: ComponentFixture<PkmnDetailsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnDetailsTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnDetailsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
