/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de elements', () => {    

    it('Validar Text Box', () => {
        cy.visit('https://www.demoqa.com')
        cy.get(loc.MENU.ELEMENTS).click()
        cy.get(loc.ELEMENTS.TEXTBOX).should('exist').click()
        cy.get(loc.TEXTBOX.FULL_NAME).type('Diego Henrique')
        cy.get(loc.TEXTBOX.EMAIL).type('diego@teste.com')
        cy.get(loc.TEXTBOX.CURRENT_ADDRESS).type('Rua Cypress, 91')
        cy.get(loc.TEXTBOX.PERMANENT_ADDRESS).type('Casa ')
        cy.get(loc.TEXTBOX.BTN).should('be.enabled').click()
        //TODO validar resultado        
    })

    it.only('Validar Check box', () => {
        cy.visit('https://www.demoqa.com')
        cy.get(loc.MENU.ELEMENTS).click()
        cy.get(loc.ELEMENTS.CHECKBOX).should('exist').click()
        //TODO continuar implementação        
    })
})
