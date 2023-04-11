import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPkmnListComponent } from './pagination-pkmn-list.component';

describe('PaginationPkmnListComponent', () => {
  let component: PaginationPkmnListComponent;
  let fixture: ComponentFixture<PaginationPkmnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPkmnListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationPkmnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
