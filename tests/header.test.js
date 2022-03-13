import SearchPage from '../pages/search.page';
import INVALIDARTICLES from '../data/invalid-articles';

describe('Header', () => {
    let article = '';

    it(`Should be able to search for an existing article and then get it as a search result`, async ()=> {
        article = 'Printed Summer Dress';
        addStep('Access home page');
        await SearchPage.open('');
        await SearchPage.searchArticle(article);
        addStep('Verify if existing article is displayed');
        await expect(SearchPage.getLinkTxtFromTitle(article)).toHaveTextContaining(article);
    });

    INVALIDARTICLES.forEach(({product, reason}) => {
        it(`Should be able to use the search bar and get a warning message, reason being: ${reason}`, async ()=> {
            addStep('Access home page');
            await SearchPage.open('');
            await SearchPage.searchArticle(product);
            addStep('Verify if alert message is displayed');
            await expect(SearchPage.searchPageAlertMsg).toBeDisplayed();
        });
    });
     
});