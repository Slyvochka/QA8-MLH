const sel = require('../../data/selectors');
const exp = require  ('../../data/expected.json');
const {name, gender, age, story} = require ('../../data/testData');
const inputValues4 = require ('../../helpers/methods,js')

describe('Age field suite', function () {

    before('Open App', function () {
        browser.url('');
        browser.maximizeWindow();
    })

    describe('Placeholder', function () {

        it('TC-XXX Placeholder is correct ', function () {
            expect(submitBtn).toEqual(true);
        });

        describe('Positive cases', function () {

            it('TC-XXX Age = 1', function () {
               inputValues4(name.default, gender.she, age.min, story.comedy);
               expect(sel.submit).toEqual(true);
            });

            it('TC-XXX Age = 999999999999', function () {
                expect(submitBtn).toEqual(true);
            });
        });

        describe('Negative cases', function () {

            it('TC-XXX Age = 0', function () {
                expect(submitBtn).toEqual(true);
            });

            it('TC-XXX Age = 9999999999999', function () {
                expect(submitBtn).toEqual(true);
            });
        });

    })
})