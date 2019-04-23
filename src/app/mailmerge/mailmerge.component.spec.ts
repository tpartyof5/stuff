import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailmergeComponent } from './mailmerge.component';

describe('MailmergeComponent', () => {
  let component: MailmergeComponent;
  let fixture: ComponentFixture<MailmergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailmergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
