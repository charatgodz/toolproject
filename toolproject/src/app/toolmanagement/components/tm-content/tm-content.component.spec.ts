import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmContentComponent } from './tm-content.component';

describe('TmContentComponent', () => {
  let component: TmContentComponent;
  let fixture: ComponentFixture<TmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
