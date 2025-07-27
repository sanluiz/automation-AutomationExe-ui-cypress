class PageHome {
  buscarProduto(termo) {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('input[name="search"]').type(termo);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').click({ force: true });
    cy.contains('Continue Shopping').click();
  }

  irParaCarrinho() {
    cy.get('a[href="/view_cart"]').first().click();
  }
}

export default new PageHome();
