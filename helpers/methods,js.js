const sel = require('../data/selectors');

function inputValues4(name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

// function inputValues5(name, gender, age, story, image) {
//     $(sel.name).setValue(name);
//     $$(sel.radioButtons)[gender].click();
//     $(sel.age).setValue(age);
//     $(sel.storyType).click();
//     $$(sel.storyList)[story].click();
// }

module.exports = inputValues4;