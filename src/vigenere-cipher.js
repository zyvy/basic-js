const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct){
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    if (direct === false){
      const direct = false;
    }
    else {
      const direct = true;
    }
  }
  //function cheakLatin(currentChar) {
  //  return currentChar.match(/[a-zA-Z]/i)
  //}
  encrypt(message, key) {
    let encrypted = [];
    // алгоритм: для строки message и key должны быть одной длины. key обрезается или продлевается
    // для каждого символа message[i] берется символ key[i].
    // для символа key[i] считается его позиция j в алфавите
    // считается позиция зашифрованного сивола как j + смещение
    for (let i = 0; i < message.length; i ++){
      if (cheakLatin(message[i])){
        encryptedChar = (i + alphabet.indexOf(key[i])) % alphabet.length;
        
      }

    }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
