beforeEach(() => {
  cy.visit('https://todomvc.com/examples/react/#/');
});

describe('validarAdicionarTarefa', () => {
  
  it('addTodoList', () => {
    cy.addTodoList()

  });

  it('renameTodoList', () => {
    cy.addTodoList()
    cy.get ('.todo-list').dblclick()
    .type('{selectall}{backspace}')
    .type('nova tarefa{enter}')
    .should('contain', 'nova tarefa')
  });
  
  it('concluindoTarefaBotao', () => {
    cy.addTodoList()
    cy.get('input[class=toggle]').check()
    .should('be.checked')
    cy.get('input[class=toggle]').uncheck()
    .should('be.enabled')

  });
    
  it('inserindoeConcluindoMultiplasTarefas', () => {
    cy.multiplasTarefas()
    cy.get('[for="toggle-all"]').click()
    .should('be.visible')
  });
  
  it('desmarcandoAconclusaoDeMultiplasTarefas', () => {
    cy.multiplasTarefas()
    cy.get('[for="toggle-all"]').click().click()
    .should('be.visible')
  });

  it('excluindoTarefa', () => {
    cy.addTodoList()
    cy.get('button[class=destroy]')
    .invoke('show')
    .should('be.visible')
    .click()
    cy.contains('Tarefa1').should('not.exist')
  });

  it('footerVisivel', () => {
    cy.addTodoList()
    cy.get('.filters').should('be.visible')
  });

  it('visualisandoContador', () => {
    cy.multiplasTarefas()
    cy.get('.todo-count').should(($contador) => {
      const textoContador = $contador.text();
      expect(textoContador).to.match(/\d+/);
      
    });
      });

  it('visualizandoContadorcomApenasUmaTarefa', () => {
    cy.addTodoList()
    cy.get('.todo-count').should(($contador) => {
      const textoContador = $contador.text();
      expect(textoContador).to.match(/\d+/);
      
    });
  });
});

