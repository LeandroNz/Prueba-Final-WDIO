import BasePage from '../pages/base.page';

class LoginPage extends BasePage {

    //Web elements
    get emailAddressInput() { return $('#email'); }
    get passwordInput() { return $('#passwd'); }
    get signInBtn() { return $('#SubmitLogin'); }
    get alertMsg() { return $('.alert-danger'); }
 

    /** Login
     *  Inputs email address and password then clicks on sign in button
     *  @param {String} email to input
     *  @param {String} password to input
     */

    async login(email, password) {
        addStep('Input email address and password then click on sign in button');
        await super.sendText(this.emailAddressInput, email);
        await super.sendText(this.passwordInput, password);
        await super.clickOnElement(this.signInBtn);
    }
    
}
export default new LoginPage();