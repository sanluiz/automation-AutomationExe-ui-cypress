class PaginaCarrinho {
  validarProdutoNoCarrinho() {
    cy.get('.cart_info .cart_description').should('exist');
  }

  prosseguirParaCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}

export default new PaginaCarrinho();
