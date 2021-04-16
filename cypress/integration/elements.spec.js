/// <reference types="cypress" />

import loc from '../support/locators'

describe('Teste funcional de elements', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(loc.MENU.ELEMENTS).click()
    })

    it('Validar Text Box', () => {
        cy.get(loc.ELEMENTS.TEXTBOX).should('exist').click()
        cy.get(loc.TEXTBOX.FULL_NAME).type('Diego Henrique')
        cy.get(loc.TEXTBOX.EMAIL).type('diego@teste.com')
        cy.get(loc.TEXTBOX.CURRENT_ADDRESS).type('Rua Cypress, 91')
        cy.get(loc.TEXTBOX.PERMANENT_ADDRESS).type('Casa ')
        cy.get(loc.TEXTBOX.BTN).should('be.enabled').click()
        
        cy.get(loc.TEXTBOX.RESULT_NAME).should('contains.text', 'Diego Henrique');
        cy.get(loc.TEXTBOX.RESULT_EMAIL).should('contains.text', 'diego@teste.com');
        cy.get(loc.TEXTBOX.RESULT_PERMANENT_ADDRESS).should('contains.text', 'Rua Cypress, 91');
        cy.get(loc.TEXTBOX.RESULT_PERMANENT_ADDRESS).should('contains.text', 'Casa');
    })

    it.only('Validar Check box', () => {
        cy.get(loc.ELEMENTS.CHECKBOX).should('exist').click()
        cy.get('.rct-option-expand-all').click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)').should('be.visible').and('have.text', 'Desktop').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon').click()
        //TODO continuar implementação
    })
})
