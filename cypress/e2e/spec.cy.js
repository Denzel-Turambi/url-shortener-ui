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

  it('should allow user to post a new url', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@url')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'postUrl.json'
    }).as('post')
    cy.get('[placeholder="Title..."]').type('Big Cat')
    cy.get('[placeholder="URL to Shorten..."]').type('https://as2.ftcdn.net/v2/jpg/05/72/82/85/1000_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg')
    cy.get('button').click().wait('@post')
    cy.get('section > :nth-child(2)').should('be.visible')
    cy.get('section > :nth-child(2)').contains('h3', 'Big Cat').should('be.visible')
    cy.get('section > :nth-child(2)').contains('a', 'http://localhost:3001/useshorturl/2').should('be.visible')
    cy.get('section > :nth-child(2)').contains('p', 'https://as2.ftcdn.net/v2/jpg/05/72/82/85/1000_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg').should('be.visible')
  })
})