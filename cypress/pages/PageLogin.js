class PageLogin {
  visitar() {
    cy.visit('/login');
  }

  preencherEmail(email) {
    cy.get('[data-qa="login-email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-qa="login-password"]').type(senha);
  }

  submeter() {
    cy.get('[data-qa="login-button"]').click();
  }

  fazerLogin(email, senha) {
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.submeter();
  }
}

export default new PageLogin();
