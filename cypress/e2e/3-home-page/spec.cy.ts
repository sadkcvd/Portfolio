// Parent Commands

// cy.visit('url')
// cy.get('selector')
// cy.request()
// ct.exec()

// Child Commands

// .click()
// .trigger()
// .find()
// .should()
// .as()

// interface MyTestConfigOverrides {
//   video: boolean;
// }

// interface ExtendedConfigOverrides extends Cypress.SuiteConfigOverrides, MyTestConfigOverrides { }

// Import the required types
/// <reference types="cypress" />

// interface Chainable {
//   checkElementVisibility(selector: string): Chainable<void>
// }

// Test Suite
describe('Video Record Test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Should Record Video', () => {

    it('Sayfayı Ziyaret Etme', () => {
      cy.url().should('eq', 'localhost:3000');
    });

    it('Navbar Logo Görünürlüğü', () => {
      cy.get('#logo')
        .should('exist')
        .and('be.visible');
    });

  });
});


//Test Suite
describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Sayfayı Ziyaret Etme', () => {
    cy.url().should('eq', 'localhost:3000');
    // cy.screenshot('Sayfa-yüklendi');
  });

  it('Navbar Logo Görünürlüğü', () => {
    cy.get('#logo')
      .should('exist')
      .and('be.visible');
    // cy.screenshot('Navbar-Logo');
  });

  it('Menu Items Görünürlüğü', () => {
    cy.get('#Home')
      .should('exist')
      .and('be.visible');

    cy.get('#Educations')
      .should('exist')
      .and('be.visible');
  });

  it('Hero Görünürlüğü', () => {
    cy.get('#hero-title')
      .should('exist')
      .and('be.visible');

    cy.get('#hero-description')
      .should('exist')
      .and('be.visible');
  });

  it("Section Image Görünürlüğü", () => {
    cy.get("#section-devices-image")
      .should('exist')
      .and('be.visible');
  })
});

export {

}