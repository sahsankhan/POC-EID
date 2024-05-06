class LoginPage {
    usernameField() {
        return cy.get('input[id=eid-username-input]');
    }

    passwordField() {
        return cy.get('input[id=eid-password-input]');
    }

    submit() {
        return cy.get('.sc-bgqQcB').click();

    }

    enterPassword(){
        return cy.xpath(`//span[text()='Enter password']`).click();
    }

    loginbutton(){
        return cy.get('button[type=submit]');
    }

    login(username, password) {
        this.usernameField().type(username);
        this.enterPassword();
        this.passwordField().type(password);
    }

    cookieConsentButton(){
        return cy.xpath(`//button[text()=' OK ']`)
    }
}

module.exports = new LoginPage;
