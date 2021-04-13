/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de elements', () => {    

    it('Validar Text Box', () => {
        cy.visit('https://www.demoqa.com')
        cy.get(loc.MENU.ELEMENTS).click()
        cy.get(loc.ELEMENTS.TEXT_BOX).should('exist').click()
        cy.get('#userName').type('Diego Henrique')
        cy.get('#userEmail').type('diego@teste.com')
        cy.get('#currentAddress').type('Rua Cypress, 91')
        cy.get('#permanentAddress').type('Casa')
        cy.get('#submit').should('be.enabled').click()
    })
})
