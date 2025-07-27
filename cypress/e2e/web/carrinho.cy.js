import PaginaHome from '../../pages/PaginaHome';
import PaginaCarrinho from '../../pages/PaginaCarrinho';

describe('Fluxo de Carrinho', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#header').should('be.visible');
  });

  it('Deve adicionar produto ao carrinho e validar', () => {
    const dados = Cypress.env('usuario');
      PaginaHome.buscarProduto(dados.busca);
      PaginaHome.adicionarPrimeiroProdutoAoCarrinho();
      PaginaHome.irParaCarrinho();
      PaginaCarrinho.validarProdutoNoCarrinho();
  });
});
