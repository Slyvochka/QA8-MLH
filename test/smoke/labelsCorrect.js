const sel = require ('../../data/selectors');
const exp = require  ('../../data/expected.json');

describe('Labels are Correct', function () {

    before('Open App',function (){
            browser.url('');
    })

    it('TC-015 Header = "My Little Hero " ', function () {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-016 Instruction = "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
        let instruction = $(sel.instruction).getText();
        expect(instruction).toEqual(exp.instruction);
    });

   it('TC-017 Name Field label = "1. What is your Hero\'s name?"', function () {
       let nameLabel = $$(sel.requiredLabel)[0].getText();
       expect(nameLabel).toEqual(exp.nameLabel);
   });

   it('TC-018 Gender Field label = "2. Please choose a gender."', function () {
       let genderLabel = $$(sel.requiredLabel)[1].getText();
       expect(genderLabel).toEqual(exp.genderLabel);
   });

   it('TC-019 The first button label = "he"', function () {
        let genderButtonHe = $$(sel.radioButtonsLabel)[0].getText();
        expect(genderButtonHe).toEqual(exp.heLabel);
   });

    it('TC-020 The second button label = "she"', function () {
        let genderButtonShe = $$(sel.radioButtonsLabel)[1].getText();
        expect(genderButtonShe).toEqual(exp.sheLabel);

    });

    it('TC-021 The third button label = "it"', function () {
        let genderButtonIt = $$(sel.radioButtonsLabel)[2].getText();
        expect(genderButtonIt).toEqual(exp.itLabel);
    });

    it('TC-022 Age Field label = "3. How old is your Hero?" ', function () {
        let ageLabel = $$(sel.requiredLabel)[2].getText();
        expect(ageLabel).toEqual(exp.ageLabel);
    });

    it('TC-023 Type of story label = "4. What type of story would you like to read?"', function () {
        let storyLabel = $$(sel.requiredLabel)[3].getText();
        expect(storyLabel).toEqual(exp.storyLabel);
    });

    it('TC-024 Image label = "5. Upload an image (optional)"', function () {
        let imageLabel = $(sel.imageLabel).getText();
        expect(imageLabel).toEqual(exp.imageLabel);
    });

    it('TC-025 Submit button label = "Create!"', function () {
        let submit = $(sel.submit).getText();
        expect(submit).toEqual(exp.submitText);
    });

});
