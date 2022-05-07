function encrypt(string = "", key = "") {
    if (string.length == key.length) {
        const text = [...string];
        const keyChars = [...key];
        var i = 0;
        var encryptedText = "";
        text.forEach($char => {
            console.log(i)
            const KeyChar = keyChars[i];
            console.log(KeyChar)
            const KeyCharCode = KeyChar.charCodeAt(0);
            const CharCode = $char.charCodeAt(0);
            const encode = (x, y) => {return ((x + y) - (x / y))}
            const newCharCode = encode(CharCode, KeyCharCode);
            encryptedText += String.fromCharCode(newCharCode);
            i++
        })
        return encryptedText;

    }
}

function decrypt(string = "", key = "") {
    if (string.length == key.length) {
        const text = [...string];
        const keyChars = [...key];
        var i = 0;
        var decryptedText = "";
        text.forEach($char => {
            const KeyChar = keyChars[i];
            const KeyCharCode = KeyChar.charCodeAt(0);
            const CharCode = $char.charCodeAt(0);
            const encode = (x, y) => {return ((x - y) + (x / y))}
            const newCharCode = encode(CharCode, KeyCharCode);
            decryptedText += String.fromCharCode(newCharCode);
            i++
        })
        return decryptedText;

    }
}


class moduleEncryption {
    encrypt(string, key) {
        var keyText = key;
        if (string.length != key.length) {
            var lng_for = 0;
            if (string.length > key.length) {
                lng_for= string.length - key.length;
            }
            else lng_for = 0;
            for (i = 0; i < lng_for || i == lng_for; i++) {
                keyText += "a";
            }
        }
            const text = [...string];
            const keyChars = [...keyText];
            var i = 0;
            var encryptedText = "";
            text.forEach($char => {
                const KeyChar = keyChars[i];
                const KeyCharCode = KeyChar.charCodeAt(0);
                const CharCode = $char.charCodeAt(0);
                const encode = (x, y) => {return ((x + y) - (x / y))}
                const newCharCode = encode(CharCode, KeyCharCode);
                encryptedText += String.fromCharCode(newCharCode);
                i++
            })
            return encryptedText;
    
        
    }
    decrypt(string = "", key = "") {
        var keyText = key;
        if (string.length != key.length) {
            var lng_for = 0;
            if (string.length > key.length) {
                lng_for= string.length - key.length;
            }
            else lng_for = 0;
            for (i = 0; i < lng_for; i++) {
                keyText += "a";
            }
        }
            const text = [...string];
            const keyChars = [...keyText];
            var i = 0;
            var decryptedText = "";
            text.forEach($char => {
                const KeyChar = keyChars[i];
                const KeyCharCode = KeyChar.charCodeAt(0);
                const CharCode = $char.charCodeAt(0);
                const encode = (x, y) => {return ((x - y) + (x / y))}
                const newCharCode = encode(CharCode, KeyCharCode);
                decryptedText += String.fromCharCode(newCharCode);
                i++
            })
            return decryptedText;
    
        
    }
}

module.exports = new moduleEncryption();

//Test;
