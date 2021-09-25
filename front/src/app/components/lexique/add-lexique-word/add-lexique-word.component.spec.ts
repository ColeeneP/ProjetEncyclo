import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLexiqueWordComponent } from './add-lexique-word.component';

describe('AddLexiqueWordComponent', () => {
  let component: AddLexiqueWordComponent;
  let fixture: ComponentFixture<AddLexiqueWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLexiqueWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLexiqueWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
