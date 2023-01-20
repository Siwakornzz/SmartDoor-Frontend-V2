import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeJsonComponent } from './fake-json.component';

describe('FakeJsonComponent', () => {
  let component: FakeJsonComponent;
  let fixture: ComponentFixture<FakeJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
