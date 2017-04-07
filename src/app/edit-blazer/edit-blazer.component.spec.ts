import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlazerComponent } from './edit-blazer.component';

describe('EditBlazerComponent', () => {
  let component: EditBlazerComponent;
  let fixture: ComponentFixture<EditBlazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
