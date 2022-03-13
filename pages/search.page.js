import BasePage from '../pages/base.page';

class SearchPage extends BasePage {

    //Web elements
    get searchPageAlertMsg() { return $('.alert-warning'); }
    
    /** Get title from a link text
     *  Pre: article's link text title needs to be displayed
     *  Pos: returns link text element
     *  @param {String} titleTxt from the link text to get
     */

    async getLinkTxtFromTitle(titleTxt) {
        return await $('*=' + `${titleTxt}`);
    }

}
export default new SearchPage();