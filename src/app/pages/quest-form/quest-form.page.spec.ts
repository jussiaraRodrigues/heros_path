import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestFromPage } from './quest-form.page';

describe('QuestFromPage', () => {
  let component: QuestFromPage;
  let fixture: ComponentFixture<QuestFromPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestFromPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
