import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatiticsPage } from './statitics.page';

describe('StatiticsPage', () => {
  let component: StatiticsPage;
  let fixture: ComponentFixture<StatiticsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatiticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
