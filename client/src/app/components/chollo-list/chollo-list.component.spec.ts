import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholloListComponent } from './chollo-list.component';

describe('CholloListComponent', () => {
  let component: CholloListComponent;
  let fixture: ComponentFixture<CholloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
