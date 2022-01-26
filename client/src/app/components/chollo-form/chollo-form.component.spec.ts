import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholloFormComponent } from './chollo-form.component';

describe('CholloFormComponent', () => {
  let component: CholloFormComponent;
  let fixture: ComponentFixture<CholloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
