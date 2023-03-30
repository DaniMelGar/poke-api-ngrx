import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailsComponent } from './pkmn-details.component';

describe('PkmnDetailsComponent', () => {
  let component: PkmnDetailsComponent;
  let fixture: ComponentFixture<PkmnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
