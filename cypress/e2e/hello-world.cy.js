describe('Hello World Test', () => {
  it('should display "Hello World"', () => {
    cy.visit("http://127.0.0.1:5500/index.html")

    cy.contains('Hello World').should('be.visible');
  });
});