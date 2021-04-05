const sel = require('../../data/selectors');
const exp = require  ('../../data/expected.json');
const {name, gender, age, story} = require ('../../data/testData');
const inputValues4 = require ('../../helpers/methods,js')

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
        browser.maximizeWindow();
        browser.pause(1000)
    })

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values ', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        inputValues4(name.default, gender.she, age.default, story.comedy )
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
         expect(tryAgainBtn).toEqual(true);
    })

    // Verify story text for valid data
    it('TC-028.a Title of the story "Two Cats And LadyBug007" is present', function (){
      let title = $(sel.storyTitle).getText();
      expect(title).toEqual(exp.storyTitle);
    })

    it('TC-028.b The story text contains "123456789" age', function (){
        let text = $(sel.storyText).getText();
        let age = (/\b[1-9]{1,12}\b/).test(text)
        expect(age).toEqual(true);
    })

    it('TC-028.c The story text contains gender "she"  and pronouns "her"', function (){
        let text = $$(sel.storyText)[0].getText();
        let she = text.match(/\bshe\b|\bher\b/gi);
        expect(she.length).toEqual(3)
    })

})