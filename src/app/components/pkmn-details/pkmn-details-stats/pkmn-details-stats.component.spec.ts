import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailsStatsComponent } from './pkmn-details-stats.component';

describe('PkmnDetailsStatsComponent', () => {
  let component: PkmnDetailsStatsComponent;
  let fixture: ComponentFixture<PkmnDetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnDetailsStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnDetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
