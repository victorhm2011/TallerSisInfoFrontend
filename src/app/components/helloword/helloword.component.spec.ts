import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowordComponent } from './helloword.component';

describe('HellowordComponent', () => {
  let component: HellowordComponent;
  let fixture: ComponentFixture<HellowordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellowordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
