import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormTestComponent } from './login-form-test.component';

describe('LoginFormTestComponent', () => {
  let component: LoginFormTestComponent;
  let fixture: ComponentFixture<LoginFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
