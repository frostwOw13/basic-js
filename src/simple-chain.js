const CustomError = require("../extensions/custom-error");

const chainMaker = {

  error: false,
  chain: [],

  getLength() {
    this.chain.length;
  },

  addLink(value) {
    value === undefined ? this.chain.push(`( )`) : this.chain.push(`( ${value} )`);
        return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.length || position === NaN || position % 1 !== 0) {
      this.error = true;
      throw new Error('Error');
  } else {
      this.chain.splice(position - 1, 1);
  }
  return this;
  },

  reverseChain() {
    this.chain.reverse();
        return this
  },

  finishChain() {
    if (this.error === false) {
      let resultChain = this.chain;
      this.chain = [];
      return resultChain.join('~~');
    } else {
        this.chain = [];
     }
  }
};


module.exports = chainMaker;
