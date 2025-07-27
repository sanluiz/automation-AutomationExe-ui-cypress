import PageHome from '../../pages/PageHome';

describe('Funcionalidade: Busca de Produto', () => {
  beforeEach(() => {
    cy.visit('/'); // carrega página apenas para testes web
  });

  it('Deve buscar um produto pelo nome', () => {
    const dados = Cypress.env('usuario');
      PageHome.buscarProduto(dados.busca);
  });
});
