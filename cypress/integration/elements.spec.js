/// <reference types="cypress" />

describe('Teste funcional de elements', () => {
    

    it('Validar Text Box', () => {
        cy.visit('https://www.demoqa.com')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('exist').click()
        cy.get('#userName').type('Diego Henrique')
        cy.get('#userEmail').type('diego@teste.com')
        cy.get('#currentAddress').type('Rua Cypress, 91')
        cy.get('#permanentAddress').type('Casa')
        cy.get('#submit').should('be.enabled').click()
    })
})