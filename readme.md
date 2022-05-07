# Mybutton Encryption Tool (MET)
> Mybutton Encryption is a way of encrypting JSON string objects with a key letter.

## Install Using npm
```cmd
$ npm install mb-encrypt --s
```

__Example usage__

###### For example, lets say that we have a server and we encrypt our packages with this service.
```js
const mbencrypt = require('mb-encrypt');
//define the object
const string = JSON.stringify({server: {
		ip: 1.1.1.1, //example
		password: "CLIENT-CONNECTION-TEST" 
	}
})

//encrypt it with the key 'key'.
const responseEncoded = mbencrypt.encrypt(string, 'key');
server.send(client.ip, responseEncoded);
//done!
```
###### Now, in our client, we can get the response and decode it with the key.
```js
const mbencrypt = require('mb-encrypt');
//response from the server
const response = request.server.response; //encoded JSON string object
const decodedString = mbencrypt.decrypt(response, 'key');
const jsonObject = JSON.parse(decodedString);
console.log(jsonObject) 
//the client was able to decode it with the key 'c'.
```

###### But in another client which isn't our client, attempting to get data would be gibberish.
```js
//client made a request
const response = request.server.response
console.log(response)
//returns: {\"SHGJKFK\": \"FHJGKDKEI.FJJEDLSOE\"};
```

### Support
> FarewellNehir (Lead Developer, Mybutton Corporation CEO) [`[contact]`](https://www.mybutton.org/link/dc)

# An Explanation of the Algorithm
###### The algorithm concludes of a complicated math algorithm.
```js
//Let's say we have 'test, hello!' as our string and 'g' as our key.
const string = 'test, hello!';
const key = 'key';
//decoding 
const charArray = [...string] //turn it into a character array.
var encodedText = "";
foreach (letter in charArray) {
if (regex.test(letter)) encodedText += letter;
if (letter == " ") encodedText += letter;
if (typeof letter == "number") encodedText += letter;
	const letterOrderInAlphabet = new String(letter).toLocaleUpperCase().charCodeAt(0) - letterOrder.a;
	const keyOrderInAlphabet = new String(key).toLocaleUpperCase().charCodeAt(0) - letterOrder.a;
	const resolution = (x, y) => return x - (y^2 + x + x * (x + y)(x-y), y^2 - x^2 * (x-y)(x+y));
	const valueAsCharOrder = resolution(charAsOrder, keyAsOrder) - 26 + 65; //get the order of the first decode of the letter, delete 26, which is the amount of letters in the alphabet, and then 65, which is the charCode of A, the first letter.
	const decode = (char, key) => char = char.order + ((char.order - (key.order * char.order)) * (key.order^2)) //decode the character from the original decoded letter to return the charOrderInAlphabet value of the original text string, and add +65 (letter A charCode)
	const decodedCharOrderInAlphabet = decode(valueAsCharOrder, keyAsOrder); 
	const stringifiedCharCode = String.fromCharCode(decodedCharOrderInAlphabet + letterOrder.a); //turn it to a letter from the char code of the original character
	encodedText += stringifiedCharCode; //add it to the text
	
}
//final result
return encodedText;
```
