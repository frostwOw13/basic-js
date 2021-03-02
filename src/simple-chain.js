const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  
  getLength () {
      this.chain.length;
   },

  addLink(value) {
      value === undefined ? this.chain.push(`( )`) : this.chain.push(`( ${value} )`);
      return this;
  },

  removeLink (position) {
      if (position < 1 || position > this.chain.length || !Number.isInteger(position)) {
          this.chain = [];
          throw new Error('Error');
      } else {
          this.chain.splice(position - 1, 1);
          return this;
      }
      
  },

  reverseChain () {
    this.chain.reverse();
    return this;
  },

  finishChain () {
         let resultChain = this.chain;
         this.chain = [];
         return resultChain.join('~~');
  }
};

module.exports = chainMaker;
