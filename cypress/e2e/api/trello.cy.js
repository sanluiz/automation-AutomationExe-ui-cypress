describe('Teste API Trello', () => {
  it('Deve validar o nome da lista e o status da requisição', () => {
    cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.data.list.name).to.be.a('string');
      });
  });
});
