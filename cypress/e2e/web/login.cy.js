import PageLogin from '../../pages/PageLogin';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    PageLogin.visitar();
  });

  it('Deve realizar login com sucesso', () => {
    const dados = Cypress.env('usuario');
    PageLogin.fazerLogin(dados.valido.email, dados.valido.senha);
    cy.contains('Logged in as').should('be.visible');
  });

  it('Não deve logar com senha incorreta', () => {
    const dados = Cypress.env('usuario');
    PageLogin.fazerLogin(dados.valido.email, dados.invalido.senha);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Não deve logar com email incorreto', () => {
    const dados = Cypress.env('usuario');
    PageLogin.fazerLogin(dados.invalido.email, dados.valido.senha);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });

  it('Neve validar campos obrigatórios', () => {
    PageLogin.submeter();
    cy.get('[data-qa="login-email"]').should('have.attr', 'required');
    cy.get('[data-qa="login-password"]').should('have.attr', 'required');
  });
});
