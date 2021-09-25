import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClassificationComponent } from './modify-classification.component';

describe('ModifyClassificationComponent', () => {
  let component: ModifyClassificationComponent;
  let fixture: ComponentFixture<ModifyClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyClassificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
