import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuploadComponent } from './formupload.component';

describe('FormuploadComponent', () => {
  let component: FormuploadComponent;
  let fixture: ComponentFixture<FormuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormuploadComponent]
    });
    fixture = TestBed.createComponent(FormuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
