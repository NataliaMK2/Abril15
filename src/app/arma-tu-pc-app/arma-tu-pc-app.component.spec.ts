import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaTuPcAppComponent } from './arma-tu-pc-app.component';

describe('ArmaTuPcAppComponent', () => {
  let component: ArmaTuPcAppComponent;
  let fixture: ComponentFixture<ArmaTuPcAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmaTuPcAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmaTuPcAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
