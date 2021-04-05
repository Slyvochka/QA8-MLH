const sel = require('../../data/selectors');
const exp = require  ('../../data/expected.json');

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
        browser.maximizeWindow();
        browser.pause(1000)
    })

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values ', function () {
        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('123456789');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        $(sel.name).setValue('LadyBug007');
        browser.pause(1000);
        $$(sel.radioButtons)[1].click();
        browser.pause(1000);
        $(sel.age).setValue('123456789');
        browser.pause(1000)
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        browser.pause(1000);
        $(sel.submit).click();
        browser.pause(3000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    })

    // it('TC-028.a Title of the story "Two Cats And LadyBug007" is present', function (){
    //   let title = $(sel.storyTitle).getText();
    //   expect(title).toEqual(exp.storyTitle);
    // })
    //
    // it('TC-028.b The first paragraph  contains "LadyBug007" name and "123456789" age', function (){
    //     let text = $$(sel.storyText)[0].getText();
    //     expect(text).toEqual(exp.storyText);
    // })
})