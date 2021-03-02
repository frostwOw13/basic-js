const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let separator = options.separator || '+';
let additionSeparator = options.additionSeparator || '|';

if (options.addition) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (i != options.additionRepeatTimes - 1) {
            str = str + options.addition + additionSeparator;
        } else {
            str = str + options.addition;
        }
    }
}
if (options.repeatTimes) {
    let add = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        if (i != options.repeatTimes - 1) {
            add = add + separator + str;
        }
    }
    str = str + add;
}
return str;
};
  