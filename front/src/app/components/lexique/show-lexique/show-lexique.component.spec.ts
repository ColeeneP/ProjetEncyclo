import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLexiqueComponent } from './show-lexique.component';

describe('ShowLexiqueComponent', () => {
  let component: ShowLexiqueComponent;
  let fixture: ComponentFixture<ShowLexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
