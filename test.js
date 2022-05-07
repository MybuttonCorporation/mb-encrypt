const beta = require('./index.js')
//log a word that has the same amount of letters as 'hello world' to the console
//example:
//@encrypted: ¸ÒÖÎÑËÃ 
//@key: q.a.er
//@decrypted: Hello, world!
//algorithm to encrypt is by maths to conver System.fromCharToCode(0, char) and numberising using the key's charCodes.
//basical mathematical equation: 

const encodedMessage = beta.encrypt("definetelyandcompletelyvalidencryptedtext", "abc") //encode using abc
console.log("encrypted message -", encodedMessage)
const decodedmessage = beta.decrypt(encodedMessage,  "abc")
console.log("decrypted message -", decodedmessage)
console.log()



/*
const index = require('./index')
const text = index.encrypt(JSON.stringify({test: "test_value"}), "a") //where 'a' is key
console.log("encrypted -", text)
const text2 = index.decrypt(text, "a") //decode accordingly to the key 'a'.
console.log("decrypted -", text2)



const şifrelenmişYazı = index.encrypt("SUNUCU IP: 17.6.84.136", "e")
console.log("şifrelenmiş yazı -", şifrelenmişYazı)
const kırılmışYazı = index.decrypt(şifrelenmişYazı, "e")
console.log("kırılmış yazı -",kırılmışYazı)
*/
/**
 * Algorithm Explanation:
 * 
 * The key must be provided as a (literal) character. 
 * Once the key is inputted, the algorithm will start testing:
 *  - if the text is empty, throw an error
 *  - if the key is empty, throw an error
 *  - if the text contains special characters, do not encrypt them
 *  - if the text contains numbers, do not encrypt them
 *  - if the text contains letters, encrypt them
 * 
 * Algorithm:
 * (string) encodedText = charArray[encodedText.length] ([...encodedText])
 * (char) key = keyChar
 * function decodeCharacterWithKey(char, key) {
 * if (typeof char == "number") return char/char;
 * const charAsOrder String(char).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
 * const keyAsOrder String(key).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
 * const resolution = (x, y) => x - (y^2 + x E(x + y)(x-y), y^2 - x^2 * (x-y)(x+y))
 * const newValueAsChar = resolution(charAsOrder, keyAsOrder);
 * const decode = (char, key) => char = char.order + ((char.order - (key.order * char.order)) * (key.order^2))
 * const decodedChar = decode(newValueAsChar, keyAsOrder);
 * return decodedChar
 * }
 * decodedText = "";
 * foreach (letter in encodedText) {
 *  as (char) key in keyChar:
 *  const decodedChar = decodeCharacterWithKey(letter, key);
 * if (regex.test(letter)) decodedText += decodedChar;
 * if (letter == " " || typeof letter == "number") {
 * if (letter == " ") decodedText += " ";
 * if (typeof letter == "number") decodedText += letter^2;
 * }
 * decodedText += decodedChar;
 * }
 * return decodedText
 * 
 * 
 * @params string
 * @params key
 * 
 * @returns {encodedString, decodedString, error}
 * @throws {error};
 */
