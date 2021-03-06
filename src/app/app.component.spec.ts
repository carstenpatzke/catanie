import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { MatSnackBarModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { MockStore } from "./shared/MockStubs";
import { APP_CONFIG } from "./app-config.module";

/* tslint:disable:no-unused-variable */

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MatSnackBarModule, StoreModule.forRoot({})],
      declarations: [AppComponent]
    });
    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: Store, useClass: MockStore },
          {
            provide: APP_CONFIG,
            useValue: {
              facility: "ESS"
            }
          }
        ]
      }
    });
    TestBed.compileComponents();
  });

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.store = TestBed.get(Store);
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'SciCat'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.store = TestBed.get(Store);
    expect(app.title).toContain("SciCat");
  }));
});
