document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passwordLength = document.querySelector('#Charcount').value;
    const specialChars = document.querySelector('#specialChars').checked;
    const numbers = document.querySelector('#Numbers').checked;
    const selector = document.querySelector('#selector').value;

    
    console.log(passwordLength, specialChars, numbers, selector);

    let includeNumeric = numbers
    let includeSpecial = specialChars

    generatePassword();

function generatePassword() {
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8 and 128 characters.");
        return;
    } 
    if (selector === "both") {
        includeLowercase = true;
        includeUppercase = true;
    } else if (selector === "Lowercase") {
            includeLowercase = true;
            includeUppercase = false;
    } else if (selector === "Uppercase") {
            includeLowercase = false;
            includeUppercase = true;
    } else if (selector === "none") {
            includeLowercase = false;
            includeUppercase = false;
    }

    
        console.log(passwordLength, includeNumeric, includeSpecial, includeLowercase, includeUppercase);

    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("At least one character type must be selected.");
        return;
    }

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    let charactersToInclude = "";
    let guaranteedChars = "";

    if (includeLowercase) {
        charactersToInclude += lowercaseChars;
        guaranteedChars += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    }
    if (includeUppercase) {
        charactersToInclude += uppercaseChars;
        guaranteedChars += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    }
    if (includeNumeric) {
        charactersToInclude += numericChars;
        guaranteedChars += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
    }
    if (includeSpecial) {
        charactersToInclude += specialCharacters;
        guaranteedChars += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * charactersToInclude.length);
        generatedPassword += charactersToInclude.charAt(index);
    }

    generatedPassword += guaranteedChars

    generatedPassword = shufflePassChars(generatedPassword);

    document.getElementById('password-output').textContent = generatedPassword;
    console.log(generatedPassword);    
    let savedPasswords1 = document.querySelector('#savedPasswords1');
                if (savedPasswords1) {
                    savedPasswords1.value += generatedPassword + '\n';
                }
}
function shufflePassChars(string) {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');

    
}
})
;




document.querySelector('#generate2').addEventListener('click', function(event) {
    event.preventDefault();
    const phrase = document.querySelector('#phrase').value.toLowerCase();
    alternateGeneratePassword(phrase);
    function alternateGeneratePassword(phrase){
        const replacements = {
            'a' : ['@' , '4' , 'A', 'a'],
            'b' : ['8','b', 'B', '6', '13'],
            'c' : ['c','C', '<', '(', '{'],
            'd' : ['D','d', '0', '6'],
            'e' : ['e','E', '3', '8'],
            'f' : ['f', 'F', '7'],
            'g' : ['g','G', '9', '&'],
            'h' : ['h','H', '#'],
            'i' : ['i','I', '1', '!'],
            'j' : ['j','J', '/'],
            'k' : ['k','K','%'],
            'l' : ['l','L', '1', '!'],
            'm' : ['m','M','^^'],
            'n' : ['n','N', '#'],
            'o' : ['o','O', '0'],
            'p' : ['p','P','9'],
            'q' : ['q','Q','9'],
            'r' : ['R','r','2'],
            's' : ['s','S', '5', '$'],
            't' : ['t','T', '7','+'],
            'u' : ['u','U','v'],
            'v' : ['v','V','<','>'],
            'w' : ['w','W'],
            'x' : ['x','X', '*'],
            'y' : ['y','Y'],
            'z' : ['z','Z','2'],
            ' ' : ['_','-','+','*','/','\\','|','~','`','!','@','#','$','%','^','&','(',')','[',']','{','}',';',':','"',"'",',','.','<','>','?','0','1','2','3','4','5','6','7','8','9'],
            '1' : ['1','!','i','I'],
            '2' : ['2','z','Z'],
            '3' : ['3','e','E'],
            '4' : ['4','a','A'],
            '5' : ['5','s','S'],
            '6' : ['6','b','B'],
            '7' : ['7','t','T'],
            '8' : ['8','b','B'],
            '9' : ['9','g','G'],
            '0' : ['0','o','O'],
        };
    
        let password = '';
                for (const char of phrase) {
                    const randomIndex = Math.floor(Math.random() * replacements[char].length);
                    password += replacements[char][randomIndex];
                }

                console.log(password)
                document.getElementById('password-output2').textContent = password;
                let savedPasswords = document.querySelector('#savedPasswords2');
                if (savedPasswords) {
                    savedPasswords.value += password + '\n';
                }
    }
});