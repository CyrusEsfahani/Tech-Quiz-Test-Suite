describe('Tech Quiz', () => {
    it('should start the quiz and present a question', () => {
      cy.visit('/');
      cy.get('button').contains('Start').click();
      cy.get('.question').should('exist');
    });
  
    it('should present another question after answering', () => {
      cy.get('.answer').first().click();
      cy.get('.question').should('exist');
    });
  
    it('should show the score after all questions are answered', () => {
      for (let i = 0; i < 10; i++) {
        cy.get('.answer').first().click();
      }
      cy.get('.score').should('exist');
    });
  
    it('should allow starting a new quiz after finishing', () => {
      cy.get('button').contains('Start New Quiz').click();
      cy.get('.question').should('exist');
    });
  });