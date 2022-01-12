import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtoriasComponent } from './artorias.component';

describe('ArtoriasComponent', () => {
  let component: ArtoriasComponent;
  let fixture: ComponentFixture<ArtoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
