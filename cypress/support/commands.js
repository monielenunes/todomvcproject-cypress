// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addTodoList', () =>{

    cy.get('.new-todo')
    .should('be.visible')
    .type('Tarefa1{enter}')
    cy.get ('.todo-list')
    .should('contain', 'Tarefa1')
})


Cypress.Commands.add('multiplasTarefas', () =>{

const text = 'nova tarefa';
const repeatCount = 5;

for (let i = 0; i < repeatCount; i++) {
  cy.get('.new-todo').type(`${text}{enter}`);
}
})

