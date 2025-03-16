import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleComponentComponent } from './theme-toggle.component.component';

describe('ThemeToggleComponentComponent', () => {
  let component: ThemeToggleComponentComponent;
  let fixture: ComponentFixture<ThemeToggleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeToggleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
