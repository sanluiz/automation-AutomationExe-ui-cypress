import PaginaHome from '../../pages/PaginaHome';

describe('Funcionalidade: Busca de Produto', () => {
  beforeEach(() => {
    cy.visit('/'); // carrega página apenas para testes web
  });

  it('Deve buscar um produto pelo nome', () => {
    const dados = Cypress.env('usuario');
      PaginaHome.buscarProduto(dados.busca);
  });
});
