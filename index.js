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
        constructor() {
            /**
             * @param $text `the current text's information`
             * @constant
             * @version 1.2.0
             * @since 1.2.0
             * @memberof `this.encrypt()`
             * 
             * @use
             * ```js
             * (String) $text = {
             * length: (int),
             * content: (String),
             * isEncoded: (bool)
             * }
             * ```
             */
            this.$text = {
                length: 0,
                content: "",
                isEncoded: false,
                encoded: {
                    text: "",
                    key: null,
                    length: 0
                }
            } 
        }
        /**
         * 
         * @param {*} string 
         * @param {*} key 
         * @since 1.2.0
         * Checks if a string is encoded with a specific key
         * ```js
         * var string = "hello world";
         * var key = "test-key";
         * this.isEncoded(string, key); // if hello world is encoded with test-key, it will return true.
         * ```
         * 
         */
        isEncoded(string = "", key = "") {
            var decode = this.decrypt(string, key);
            if (decode.charCodeAt(0) <= 122) {
                this.$text.isEncoded = true;
                this.$text.content = decode;
                this.$text.length = decode.length;
                this.$text.encoded.text = string;
                this.$text.encoded.key = key;
                this.$text.encoded.length = string.length;
                return true
            }
            else return false
        }
        /**
         * 
         * @param {*} string 
         * @param {*} key 
         * @returns `encodedString`
         * @since 1.0.0
         * 
         * Encrypts a string or a JSON string object with a specific key
         * 
         * @example const string = "hello world";
         * const key = "test-key";
         * const encodedString = this.encrypt(string, key);
         * console.log(encodedString) // returns "hello world" encoded with "test-key"
         * 
         * @example const object = JSON.stringify({key: 'value'})
         * const key = "test-key";
         * const encodedString = this.encrypt(object, key);
         * console.log(JSON.parse(encodedString)) // returns 'object' encoded with "test-key"
         */
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
                /**
         * 
         * @param {*} string 
         * @param {*} key 
         * @returns `decodedString`
         * @since 1.0.0
         * 
         * Decrypts a string or a JSON string object with a specific key
         * 
         * @example const string = "AHJDYHEJH";
         * const key = "test-key";
         * const decodedString = this.decrypt(string, key);
         * console.log(decodedString) // returns "AHJDYHEJH" decoded with "test-key"
         * 
         * @example const object = "{\"GJDKDHJJD\": \"JHKDFJKSH\"}";
         * const key = "test-key";
         * const decodedString = this.decrypt(object, key);
         * console.log(JSON.parse(decodedString)) // returns 'object' encoded with "test-key"
         */
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
    class encryptionError extends Error {
        constructor(string) {
            super(string);
        }
    }
    module.exports = new moduleEncryption()