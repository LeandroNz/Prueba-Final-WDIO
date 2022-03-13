import BasePage from '../pages/base.page';

class AccountPage extends BasePage {

    //Web elements
    get myAccountHeading() { return $('.page-heading'); }
   
    
}
export default new AccountPage();