import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibraryWrapperComponent } from './test-library-wrapper.component';
import { NgpImagePickerModule } from 'ngp-image-picker';

describe('TestLibraryWrapperComponent', () => {
  let component: TestLibraryWrapperComponent;
  let fixture: ComponentFixture<TestLibraryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibraryWrapperComponent ],
      imports: [NgpImagePickerModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibraryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
