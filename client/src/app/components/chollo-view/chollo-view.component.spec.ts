import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholloViewComponent } from './chollo-view.component';

describe('CholloViewComponent', () => {
  let component: CholloViewComponent;
  let fixture: ComponentFixture<CholloViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholloViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholloViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
