import LoginPage from '../pages/login.page';
import AccountPage from '../pages/account.page';
import INVALIDUSERS from '../data/invalid-users';

describe('Login', () => {
    let emailAddress = 'judy00k_y776v@tigpe.com';
    let password = 'prueba';
    
    //Preconditions
    beforeEach('Should access login page', async ()=> {
        await LoginPage.open('');
        await LoginPage.clickOnElement(LoginPage.signInLink);
    });

    INVALIDUSERS.forEach(({email, passwd, reason}) => {
        it(`Should not be able to login, reason being: ${reason}`, async ()=> {
            await LoginPage.login(email, passwd);
            addStep('Verify if alert message is displayed');
            await expect(LoginPage.alertMsg).toBeDisplayed();
        });
    });
    
    it(`Email address input should be highlited when am invalid email address format is inputed`, async ()=> {
        await (await LoginPage.emailAddressInput).waitForDisplayed();
        await expect(await browser.checkElement(await LoginPage.emailAddressInput, "wdio-headerContainer", {})).not.toEqual(0);
        addStep('Input email address');
        await LoginPage.sendText(await LoginPage.emailAddressInput, 'a');
        addStep('Input password');
        await LoginPage.sendText(await LoginPage.passwordInput, password);
    });
    
    it(`Should be able to login using a correct email address and password`, async ()=> {
        await LoginPage.login(emailAddress, password);
        addStep('Verify if account title is displayed');
        await expect(AccountPage.myAccountHeading).toHaveTextContaining('MY ACCOUNT');
    });
     
});