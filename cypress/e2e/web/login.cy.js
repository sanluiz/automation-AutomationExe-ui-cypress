import PaginaLogin from '../../pages/PaginaLogin';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    PaginaLogin.visitar();
  });

  it('Deve realizar login com sucesso', () => {
    cy.fixture('usuario').then((dados) => {
      PaginaLogin.fazerLogin(dados.valido.email, dados.valido.senha);
      cy.contains('Logged in as').should('be.visible');
    });
  });

  it('Não deve logar com senha incorreta', () => {
    cy.fixture('usuario').then((dados) => {
      PaginaLogin.fazerLogin(dados.valido.email, dados.invalido.senha);
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });

  it('Não deve logar com email incorreto', () => {
    cy.fixture('usuario').then((dados) => {
      PaginaLogin.fazerLogin(dados.invalido.email, dados.valido.senha);
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });

  it('Neve validar campos obrigatórios', () => {
    PaginaLogin.submeter();
    cy.get('[data-qa="login-email"]').should('have.attr', 'required');
    cy.get('[data-qa="login-password"]').should('have.attr', 'required');
  });
});
