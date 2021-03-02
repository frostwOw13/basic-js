const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
    let separator = options.separator || '+';
    let additionSeparator = options.additionSeparator || '|';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let repeatTimes = options.repeatTimes || 1;
    
    if (options.addition) {
        for (let i = 0; i < additionRepeatTimes; i++) {
            if (i != additionRepeatTimes - 1) {
                str = str + options.addition + additionSeparator;
            } else {
                str = str + options.addition;
            }
        }
    }
    if (options.repeatTimes) {
        let add = '';
        for (let i = 0; i < repeatTimes; i++) {
            if (i != repeatTimes - 1) {
                add = add + separator + str;
            }
        }
        str = str + add;
    }
    return str;
};
  