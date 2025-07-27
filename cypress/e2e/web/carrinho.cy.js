import PageHome from '../../pages/PageHome';
import PageCarrinho from '../../pages/PageCarrinho';

describe('Fluxo de Carrinho', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#header').should('be.visible');
  });

  it('Deve adicionar produto ao carrinho e validar', () => {
    const dados = Cypress.env('usuario');
      PageHome.buscarProduto(dados.busca);
      PageHome.adicionarPrimeiroProdutoAoCarrinho();
      PageHome.irParaCarrinho();
      PageCarrinho.validarProdutoNoCarrinho();
  });
});
