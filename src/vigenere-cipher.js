const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (cipherMachine = true) {
    this.cipherMachine = cipherMachine;
}

encrypt (str, key) {
    let result = '';
    let resultend ='';
    let count = 0;
    let strWSpaces = str.toLowerCase().replace(/\s/g, '');
    key = key.toLowerCase()

    if (str && key) {

        for (let i = 0, j = 0; i < strWSpaces.length; i++, j++) {
            let currentLetter = strWSpaces[i].charCodeAt();
            let currentKeyLetter = key[j%key.length].charCodeAt();
            result += String.fromCharCode((((currentLetter - 97) + (currentKeyLetter - 97)) % 26) + 97);
        }
    
        for (let i = 0; i < str.length; i++) {
            if (str.toLowerCase()[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
                resultend += str[i];
                count++;
            } else {
                resultend += result[i - count];
            }
        }
        if (this.cipherMachine) {
            return resultend.toUpperCase()
        } else {
            return resultend.toUpperCase().split('').reverse().join('')
        }

    } else {
        throw new Error('Error')
    }
}

decrypt (str, key) {
    let result = '';
    let resultend ='';
    let count = 0;
    let strWSpaces = str.toLowerCase().replace(/\s/g, '');
    key = key.toLowerCase()

    if (str && key) {

        for (let i = 0, j = 0; i < strWSpaces.length; i++, j++) {
            let currentLetter = strWSpaces[i].charCodeAt();
            let currentKeyLetter = key[j%key.length].charCodeAt();
            if ((currentLetter - 97) - (currentKeyLetter - 97) < 0 ) {
                result += String.fromCharCode((((currentLetter - 97) - (currentKeyLetter - 97)) + 26) + 97);
            } else {
                result += String.fromCharCode(((currentLetter - 97) - (currentKeyLetter - 97)) + 97);
            }
         }

        for (let i = 0; i < str.length; i++) {
            if (str.toLowerCase()[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
                resultend += str[i];
                count++;
            } else {
                resultend += result[i - count];
            }
        }
        if (this.cipherMachine) {
            return resultend.toUpperCase()
        } else {
            return resultend.toUpperCase().split('').reverse().join('')
        }

    } else {
        throw new Error('Error')
    } 
}
}

module.exports = VigenereCipheringMachine;
