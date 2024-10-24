import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaYHoraActualComponent } from './fecha-yhora-actual.component';

describe('FechaYHoraActualComponent', () => {
  let component: FechaYHoraActualComponent;
  let fixture: ComponentFixture<FechaYHoraActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechaYHoraActualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaYHoraActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
