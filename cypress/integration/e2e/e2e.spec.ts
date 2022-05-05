
describe('e2e', function () {

  let user: any
  before(function () {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  it('Visit BrowserStack Demo Website', () => {
    cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')
    cy.visit('/');
    cy.wait('@apiCheck');
  })

  it('Click on Sign In link', () => {

    cy.visit('/');
    cy.get('#signin', { timeout: 30000 }).click();
  })

  it('Perform Login', function () {

    cy.get('#username', { timeout: 30000 }).should('be.visible').click({ force: true }).type(user.user4.username + '{enter}');
    cy.get('#password', { timeout: 30000 }).click({ force: true }).type(user.user4.password + '{enter}');
    cy.get('#login-btn', { timeout: 30000 }).click();

    cy.url().should('include', 'bstackdemo.com/?signin=true') // => true
  })

});
