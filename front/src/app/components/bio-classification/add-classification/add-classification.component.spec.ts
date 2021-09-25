import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassificationComponent } from './add-classification.component';

describe('AddClassificationComponent', () => {
  let component: AddClassificationComponent;
  let fixture: ComponentFixture<AddClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
