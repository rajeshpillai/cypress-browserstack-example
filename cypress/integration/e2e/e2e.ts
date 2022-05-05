
describe('e2e', function () {

  let user: any
  before(function () {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  it('Visit BrowserStack Demo Website', () => {
    cy.visit('/');
  })

});
