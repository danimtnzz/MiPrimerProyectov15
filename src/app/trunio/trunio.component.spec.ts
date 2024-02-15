import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunioComponent } from './trunio.component';

describe('TrunioComponent', () => {
  let component: TrunioComponent;
  let fixture: ComponentFixture<TrunioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrunioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrunioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
