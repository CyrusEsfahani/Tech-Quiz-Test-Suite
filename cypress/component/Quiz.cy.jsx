import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').should('exist');
  });
});