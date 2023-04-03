// Game: https://slither.io/
// Protection (dir): http://slither.io/s/game832434.js (Secret eval done via array)

class Slither {
  constructor() {}

  // Function to validate the version string received from the server
  _isValidVersion(versionString) {
    var versionNumber = 0;
    var addend = 23;
    var characterCode;
    var digitsSoFar = 0;
    var versionChars = '';

    // Loop through the version string and calculate a version number
    for (var index = 0; index < versionString.length; index++) {
      characterCode = versionString.charCodeAt(index);
      // Convert uppercase characters to lowercase
      if (characterCode <= 96) {
        characterCode += 32;
      }
      // Convert character code to a number from 0 to 25
      characterCode = (characterCode - 97 - addend) % 26;
      if (characterCode < 0) {
        characterCode += 26;
      }
      // Build the version number by shifting the bits and adding the character code
      versionNumber *= 16;
      versionNumber += characterCode;
      // Increment the addend and digitsSoFar variables
      addend += 17;
      if (1 === digitsSoFar) {
        // If we have two digits, add the character represented by the version number to versionChars
        versionChars += String.fromCharCode(versionNumber);
        digitsSoFar = versionNumber = 0;
      } else {
        digitsSoFar++;
      }
    }

    // Extract the token from versionChars
    var extractedToken = versionChars.slice(versionChars.indexOf("'") + 1, versionChars.lastIndexOf("'"));

    // Convert the extracted token to an array of bytes
    for (var i = 0; i < 24; i++) {
      this.idba[i] = extractedToken.charCodeAt(i);
    }

    // If the array of bytes is not empty, apply a shift cipher to it
    if (this.idba.length > 0) {
      var base = 0;
      for (var charCode, encodedCode, shiftAmount, i = 0; i < this.idba.length; i++) {
        charCode = 65;
        encodedCode = this.idba[i];
        if (97 <= encodedCode) {
          charCode += 32;
          encodedCode -= 32;
        }
        encodedCode -= 65;
        if (0 === i) {
          base = 2 + encodedCode;
        }
        shiftAmount = encodedCode + base;
        shiftAmount %= 26;
        base += 3 + encodedCode;
        this.idba[i] = shiftAmount + charCode;
      }
    }

    // Check that all characters in the version string are within the range A-Z and a-z
    for (index = 0; index < versionString.length; index++) {
      characterCode = versionString.charCodeAt(index);
      if (characterCode < 65 || characterCode > 122) {
        return false;
      }
    }

    // Return true if the version string is valid, false otherwise
    return true;
  }

  // Function to handle the server version message
  gotServerVersion(versionKey) {
    var random_id = "";
    for (var c = 0; 24 > c; c++) {
      // Generate a random string of length 24
      random_id += String.fromCharCode(65 + (.5 > Math.random() ? 0 : 32) + Math.floor(26 * Math.random()));
    }
    // Convert the random string to an array of bytes
    this.idba = new Uint8Array(random_id.length);
    for (c = 0; c < random_id.length; c++) {
      this.idba[c] = random_id.charCodeAt(c);
    }
	// Then validate, if the key is false then return error.
    if (this._isValidVersion(versionKey)) {
      return this.idba;
    } else throw new Error('Invalid server version Key string');
  };
}
