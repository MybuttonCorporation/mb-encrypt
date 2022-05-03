const lettersByCharNumber = {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    }
    
    class moduleEncryption {
        encrypt(text, keyChar) {
            const textAsChar = [...text];
            const keyAsChar = keyChar
    
            if (textAsChar.length === 0) {
                throw new encryptionError("Text is empty");
            }
            if (keyAsChar.length === 0) {
                throw new encryptionError("Key is empty");
            }
            //loop through the array of textAsChar
            var encryptedText = ""; 
            for (let i = 0; i < textAsChar.length; i++) {
                
            const value = textAsChar[i];
            //if the value is a number just add it
            if (typeof value == 'number') encryptedText += value;
    
            if (this.#containsSpecialCharacters(value)) encryptedText += value;
    
    
            else {
                    const valueAsOrder = String(value).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
                    const keyValue = keyAsChar
                    const keyValueAsOrder = String(keyValue).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
                    const encryptedValue = valueAsOrder + (keyValueAsOrder);
                    const newValueAsChar = encryptedValue;
                    encryptedText += String.fromCharCode(newValueAsChar + lettersByCharNumber.a);
                }
    
            }
            return encryptedText
        }
        decrypt(text, keyChar) {
            const textAsChar = [...text];
            const keyAsChar = keyChar
            
            if (textAsChar.length === 0) {
                return new encryptionError("Text is empty");
            }
            if (keyAsChar.length === 0) {
                return new encryptionError("Key is empty");
            }
            //loop through the array of textAsChar
            var decryptedText = "";
            for (let i = 0; i < textAsChar.length; i++) {
                const value = textAsChar[i];
            //if the value is a number just add it
            if (typeof value == 'number') decryptedText += value;
            
            if (this.#containsSpecialCharacters(value)) decryptedText += value;
                else {
                    require('math').E; var E = (num) => { num + num^2 - (num^2 + num^2) * num^2 / num^num};
                    const resultAsOrder = String(value).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
                    const keyValue = keyAsChar;
                    const keyAsOrder = String(keyValue).toLocaleUpperCase().charCodeAt(0) - lettersByCharNumber.a;
                    const decryptedValue = resultAsOrder - (keyAsOrder);
                    const resolution = (x, y) => x - (y^2 + x + x*(x + y)*(x-y), y^2 - x^2 * (x-y)*(x+y))
                    var val = resolution(decryptedChar, keyChar);
                    const decode = (char, key) => char = char.order + ((char.order - (key.order * char.order)) * (key.order^2)) //decode the character from the original decoded letter to return the charOrderInAlphabet value of the original text string, and add +65 (letter A charCode)
                    const decrypted_character_first = decode(val, keyChar);
                    var decryptedChar = decrypted_character_first
                    decryptedChar = decryptedValue;
                    decryptedText += String.fromCharCode(decryptedChar + 65);
                }
            }
            return decryptedText
        }
        #containsSpecialCharacters(str){
            var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            return regex.test(str);
        }
        #letterInAlphabeticalOrder(char = ""){
            const value = char.toLocaleUpperCase().charCodeAt(0);
            const valueAsNumber = value - lettersByCharNumber.a + 1;
            return valueAsNumber;
        }
    }
    
    class encryptionError extends Error {
        constructor(string) {
            super(string);
        }
    }
    module.exports = new moduleEncryption()