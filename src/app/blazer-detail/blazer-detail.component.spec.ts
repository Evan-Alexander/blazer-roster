import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazerDetailComponent } from './blazer-detail.component';

describe('BlazerDetailComponent', () => {
  let component: BlazerDetailComponent;
  let fixture: ComponentFixture<BlazerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlazerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlazerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
