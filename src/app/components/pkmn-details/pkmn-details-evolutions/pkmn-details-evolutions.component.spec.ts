import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnDetailsEvolutionsComponent } from './pkmn-details-evolutions.component';

describe('PkmnDetailsEvolutionsComponent', () => {
  let component: PkmnDetailsEvolutionsComponent;
  let fixture: ComponentFixture<PkmnDetailsEvolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnDetailsEvolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnDetailsEvolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
