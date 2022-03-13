const PAGE_TIMEOUT = 10000

export default class BasePage {

   async open(route) {
        await browser.url(route);
   }

   //Header web elements
   get signInLink() { return $('.login'); }
   get headerSearchBar() { return $('#search_query_top'); }
   get headerBtnSearch() { return $('.button-search'); }
   

   /** 
    * Pre: function cannot handle incorrect selectors
    * Pos: element is clicked on
    * @param {Object} element to click
    */
   async clickOnElement(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }

   /** 
    * Pre: function cannot handle incorrect selectors,
    * also element needs to have String type value
    * Pos: element`s text value is replaced
    * @param {Object} element to be modified
    * @param {String} text to input
    */
   async sendText(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.setValue(text);
   }

   async searchArticle(article) {
        addStep('Search an article on the search bar');
        await this.sendText(this.headerSearchBar, article);
        await this.clickOnElement(this.headerBtnSearch);
   }
}