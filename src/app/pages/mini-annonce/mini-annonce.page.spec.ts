import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniAnnoncePage } from './mini-annonce.page';

describe('MiniAnnoncePage', () => {
  let component: MiniAnnoncePage;
  let fixture: ComponentFixture<MiniAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiniAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
