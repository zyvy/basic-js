const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    if (direct == false) {
      this.cipherWay = false;
    } else {
      this.cipherWay = true;
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    let tempMessage = message.split(' ').join('');
    const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let fullKey = key.repeat(Math.ceil(tempMessage.length / key.length)).toUpperCase();
    //let fullKey = '';
    let ka = 0;

/*     for (let j = 0; j < message.length; j++) {
      if (alphabet.indexOf(message[j]) < 0) {
        fullKey = fullKey.concat(message[j]);
        k -= 1;
      } else {
        fullKey = fullKey.concat(tempKey[j]);
        k += 1;
      }
    } */



    let encrypted = [];

   // console.log('mesg, key:','\n',message, '\n',fullKey)

    function getChars(something) {
      const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    //  console.log('func get', something);
      if (Number.isInteger(something)) {
        return alphabet[Number(something)];
      } else if (alphabet.indexOf(something) >= 0) {
        return alphabet.indexOf(something);
      } else {
        return something;
      }
    }

    for (let indx=0; indx < message.length; indx++) {
      if (alphabet.indexOf(message[indx]) >= 0) {
      const m = getChars(message[indx]);
   //   console.log('looking for', message[indx]);
      const k = getChars(fullKey[ka]);
    //  console.log('func return',m,' ', k, '|', indx, ka)
      const c = (m + k) % 26;
      encrypted.push(getChars(c));
      ka +=1;
    } else {
    //  console.log('idx, append', indx, message[indx])
      encrypted.push(message[indx]);
    }
  }
  if (this.cipherWay) {
    return this, encrypted.join('')
  } else {
    return this, encrypted.reverse().join("");
  }
    // remove line with error and write your code here
  
}
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    
    function getChars(something) {
      const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    //  console.log('func get', something);
      if (Number.isInteger(something)) {
        return alphabet[Number(something)];
      } else if (alphabet.indexOf(something) >= 0) {
        return alphabet.indexOf(something);
      } else {
        return something;
      }
    }




    const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let tempMessage = message.split(' ').join('');
    let decryped = [];
    let fullKey = key.repeat(Math.ceil(tempMessage.length / key.length)).toUpperCase();
    let ka = 0;
    if (this.cipherWay = false) {
      message =  message.reverse();
    }
//    console.log('cippertext', message);
 //   console.log('key', fullKey);
    for (let indx = 0; indx < message.length; indx++){
      if (alphabet.indexOf(message[indx]) < 0){
        decryped.push(message[indx]);
      } else {
        const c = getChars(message[indx]);
        const k = getChars(fullKey[ka]);
        let m = (c - k) % 26;
        if (m < 0) {
          m = (c - k + 26) % 26;
        }
        decryped.push(getChars(m));
        ka += 1;
      }
    }
    return this, decryped.join('')


    // remove line with error and write your code here
  }
}
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt("attack at dawn!", "alphonse"));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
//=> 'AEIHQX SX DLLU!'

module.exports = {
  VigenereCipheringMachine,
};
