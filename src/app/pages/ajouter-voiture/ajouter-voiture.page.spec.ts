import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterVoiturePage } from './ajouter-voiture.page';

describe('AjouterVoiturePage', () => {
  let component: AjouterVoiturePage;
  let fixture: ComponentFixture<AjouterVoiturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
