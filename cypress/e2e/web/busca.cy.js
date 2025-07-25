import PaginaHome from '../../pages/PaginaHome';

describe('Funcionalidade: Busca de Produto', () => {
  beforeEach(() => {
    cy.visit('/'); // carrega página apenas para testes web
  });

  it('Deve buscar um produto pelo nome', () => {
    cy.fixture('usuario').then((dados) => {
      PaginaHome.buscarProduto(dados.busca);
    });
  });
});
