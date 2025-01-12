describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://joaomacaoli.com.br')

    cy.contains('Portfólio').click()
  })
})
