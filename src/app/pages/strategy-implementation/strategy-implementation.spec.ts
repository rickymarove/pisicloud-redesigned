import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { StrategyImplementation } from './strategy-implementation';

describe('StrategyImplementation', () => {
  let component: StrategyImplementation;
  let fixture: ComponentFixture<StrategyImplementation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyImplementation],
      providers: [provideRouter([]), provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(StrategyImplementation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
