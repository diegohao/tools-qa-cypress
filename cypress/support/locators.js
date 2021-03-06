const locators = {
  MENU: {
    ELEMENTS: '.category-cards > :nth-child(1)'
    //FORMS:
    //ALERTS_FRAME_WINDOWS:
    //WIDGETS:
    //INTERACTIONS:    
  },
  ELEMENTS: {
    TEXTBOX: ':nth-child(1) > .element-list > .menu-list > #item-0',
    CHECKBOX: ':nth-child(1) > .element-list > .menu-list > #item-1'
    //RADIOBUTTON:
    //WEB_TABLES:
    //BUTTONS:
    //LINKS:
    //DYNAMIC_PROPERTIES:
  },
  TEXTBOX: {
    FULL_NAME: '#userName',
    EMAIL: '#userEmail',
    CURRENT_ADDRESS: '#currentAddress',
    PERMANENT_ADDRESS: '#permanentAddress',
    BTN: '#submit',
    RESULT_NAME: '#name',
    RESULT_EMAIL: '#email',
    RESULT_PERMANENT_ADDRESS: '.border > #currentAddress',
    RESULT_PERMANENT_ADDRESS: '.border > #permanentAddress'
  }
}

export default locators;
