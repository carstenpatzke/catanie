import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalFilterComponent } from "./proposal-filter.component";
import {
  MatDatepickerInputEvent,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
} from "@angular/material";
import { DateRange } from "datasets/datasets-filter/datasets-filter.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedCatanieModule } from "shared/shared.module";
import { SatDatepickerModule, SatNativeDateModule } from "saturn-datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ProposalFilterComponent", () => {
  let component: ProposalFilterComponent;
  let fixture: ComponentFixture<ProposalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProposalFilterComponent],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SatDatepickerModule,
        SatNativeDateModule,
        SharedCatanieModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("#doClear()", () => {
    it("should emit an event", () => {
      spyOn(component.onClear, "emit");

      component.doClear();

      expect(component.onClear.emit).toHaveBeenCalled();
    });
  });

  describe("#doSearchChange()", () => {
    it("should emit an event", () => {
      spyOn(component.onSearchChange, "emit");

      const query = "test";
      component.doSearchChange(query);

      expect(component.onSearchChange.emit).toHaveBeenCalledTimes(1);
      expect(component.onSearchChange.emit).toHaveBeenCalledWith(query);
    });
  });

  describe("#doDateChange()", () => {
    it("should emit an event", () => {
      spyOn(component.onDateChange, "emit");

      const event = {
        value: {
          begin: new Date(),
          end: new Date()
        }
      };
      component.doDateChange(event as MatDatepickerInputEvent<DateRange>);

      expect(component.onDateChange.emit).toHaveBeenCalledTimes(1);
      expect(component.onDateChange.emit).toHaveBeenCalledWith(event.value);
    });
  });
});
