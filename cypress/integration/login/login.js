describe('Login', () => {
    it ('Visitar página de login', () => {
        cy.visit('http://127.0.0.1:8080/')
    });

    it ('Preencher formulario', () => {
        cy.get('#email').type('ale@email.com');
        cy.get('#senha').type('123456');
        cy.get('#form-login').submit();
    })
});