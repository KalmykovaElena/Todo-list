export class Validator {

    static isEmailValid(value = '') {
        console.log(value)
        const array = value.trim().split('')
        for (let i = 0; i < array.length; i++) {
            if (array[i] === ' ') return false
        }
        if (!value.includes('@')) {

            return false
        }
        return value.trim()
    }

    static isNameValid(value = '') {
        let letters = /^[A-Za-z0-9_]+$/;
        if (value.match(letters)) return true;
        else {
            return false;
        }
    }

    static isPasswordValid(value = '') {

        if (value.length < 6) {
            // alert("Error: Password must contain at least six characters!");
            return false;
        }
        let re = /[0-9]/;
        if (!re.test(value)) {
            // alert("Error: password must contain at least one number (0-9)!");
            return false;
        }
        re = /[a-z]/;
        if (!re.test(value)) {
            // alert("Error: password must contain at least one lowercase letter (a-z)!");
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(value)) {
            // alert("Error: password must contain at least one uppercase letter (A-Z)!");
            return false;
        }
        // alert("You entered a valid password: ");
        return true;
    }


    static required(value = '') {
        return value && value.trim()
    }
}