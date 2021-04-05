const sel = require('../../data/selectors');
const exp = require  ('../../data/expected.json');

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App',function (){
            browser.url('');
        })

        it('TC-001 Page Title is "MLH trial"', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name field label is present', function () {
            let nameLabel = $$(sel.requiredLabel)[0].isDisplayed();
            expect(nameLabel).toEqual(true);
        });

        it('TC-005 Name field is present', function () {
            let nameField = $(sel.name).isDisplayed();
            expect(nameField).toEqual(true);
        });

        it('TC-006 Gender radio buttons label is present', function () {
            let genderLabel = $$(sel.requiredLabel)[1].isDisplayed();
            expect(genderLabel).toEqual(true);
        });

        it('TC-007.a Gender radio button 1 is present ', function () {
            let genderButtonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(genderButtonHe).toEqual(true);

        });

        it('TC-007.b Gender radio button 2 is present ', function () {
            let genderButtonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(genderButtonShe).toEqual(true);
        });

        it('TC-007.c Gender radio button 3 is present ', function () {
            let genderButtonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(genderButtonIt).toEqual(true);
        });

        it('TC-008 Age field label is present', function () {
            let ageLabel = $$('.ant-form-item-required')[2].isDisplayed();
            expect(ageLabel).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let ageField = $(sel.age).isDisplayed();
            expect(ageField).toEqual(true);
        });

        it('TC-010 Story Type field label is present', function () {
            let storyLabel = $$(sel.requiredLabel)[3].isDisplayed();
            expect(storyLabel).toEqual(true);
        });

        it('TC-011 Story Type dropdown is present', function () {
            let storyDropdown = $(sel.storyType).isDisplayed();
            expect(storyDropdown).toEqual(true);
        });

        it('TC-012 Image field label is present', function () {
            let imageLabel = $(sel.imageLabel).isDisplayed();
            expect(imageLabel).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let imageField = $(sel.imageField).isDisplayed();
            expect(imageField).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let submit = $(sel.submit).isDisplayed();
            expect(submit).toEqual(true);
        });
    });
});