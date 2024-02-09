import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { MonAnnoncePage } from './mon-annonce.page';

describe('MonAnnoncePage', () => {
  let component: MonAnnoncePage;
  let fixture: ComponentFixture<MonAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
