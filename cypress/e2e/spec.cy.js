describe('dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urlData.json'
    }).as('url')
  })

  it('should display main page', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@url')
    cy.get('header').contains('h1', 'URL Shortener').should('be.visible')
    cy.get('form').contains('button', 'Shorten Please!').should('be.visible')
    cy.get('[placeholder="Title..."]').should('be.visible')
    cy.get('[placeholder="URL to Shorten..."]').should('be.visible')
    cy.get('.url').should('be.visible')
    cy.get('.url').contains('h3', 'Awesome photo').should('be.visible')
    cy.get('.url').contains('a', 'http://localhost:3001/useshorturl/1').should('be.visible')
    cy.get('.url').contains('p', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80').should('be.visible')
  })
})