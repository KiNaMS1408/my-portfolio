import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeAnimationsComponent } from './theme.animations.component';

describe('ThemeAnimationsComponent', () => {
  let component: ThemeAnimationsComponent;
  let fixture: ComponentFixture<ThemeAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeAnimationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
