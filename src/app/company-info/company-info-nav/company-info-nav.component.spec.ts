import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoNavComponent } from './company-info-nav.component';

describe('CompanyInfoNavComponent', () => {
  let component: CompanyInfoNavComponent;
  let fixture: ComponentFixture<CompanyInfoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInfoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
