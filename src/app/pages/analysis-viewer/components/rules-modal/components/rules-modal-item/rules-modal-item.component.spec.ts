import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesModalItemComponent } from './rules-modal-item.component';

describe('RulesModalItemComponent', () => {
  let component: RulesModalItemComponent;
  let fixture: ComponentFixture<RulesModalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesModalItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesModalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
