/// <reference types="Cypress" />

describe("Datasets", () => {
  beforeEach(() => {
    cy.wait(5000);

    cy.login(Cypress.config("username"), Cypress.config("password"));

    cy.createDataset("raw");

    cy.server();
    cy.route("POST", "/api/v3/Datasets/**/*").as("upload");
  });

  afterEach(() => {
    cy.login(
      Cypress.config("secondaryUsername"),
      Cypress.config("secondaryPassword")
    );
    cy.removeDatasets();
  });

  describe("Add Attachment", () => {
    it("should go to dataset details and add an attachment using the dropzone", () => {
      cy.visit("/datasets");

      cy.wait(5000);

      cy.get(".mat-row")
        .contains("Cypress Dataset")
        .click();

      cy.wait(5000);

      cy.get(".mat-tab-label")
        .contains("Attachments")
        .click();

      cy.wait(5000);

      cy.fixture("attachment-image").then(file => {
        cy.get(".dropzone").upload(
          {
            fileContent: file.content,
            fileName: file.name,
            mimeType: file.mimeType
          },
          { subjectType: "drag-n-drop", force: true }
        );
      });

      cy.wait("@upload").then(response => {
        expect(response.method).to.eq("POST");
        expect(response.status).to.eq(200);
      });

      cy.get(".attachment-card #caption").should(
        "have.value",
        "SciCatLogo.png"
      );
    });
  });
});
