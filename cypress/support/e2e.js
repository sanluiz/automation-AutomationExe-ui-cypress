import './commands';

// Ignora erros de JS não relacionados ao teste
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
