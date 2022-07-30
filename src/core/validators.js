export let content=''
export class Validator {
    static required(value = '') {
        return value && value.trim()
    }
    static isEmailValid(value = '') {
        if (value.length < 3) {
            content='Error: Email  cannot be empty!'
            return false;
        }
        const array = value.trim().split('')
        for (let i = 0; i < array.length; i++) {

            if (array[i] === ' ') {
                content='Error: Email  cannot contain spaces!'
                return false
            }
        }
        if (!value.includes('@')) {
            content='Error: Email must contain "@"!'
            return false
        }
        if (value[value.length-1]=='@') {
            content='Error: Finish entering the email!'
            return false
        }
        return value.trim()
    }

    static isNameValid(value = '') {
        if (value.length < 3) {
            content='Error: Name must contain at least three characters!'
            return false;
        }
        let letters = /^[A-Za-z0-9_]+$/;
        if (value.match(letters)) return true;
        else {
            content='Error: Name must contain letters numbers or an underscore !'
            return false;
        }
    }

    static isPasswordValid(value = '') {
        if (value.length < 6) {
        content='Error: Password must contain at least six characters!'
            return false;
        }
        if (!/[0-9]/.test(value)) {
            content="Error: password must contain at least one number (0-9)!";
            return false;
        }
        if (!/[a-z]/.test(value)) {
            content="Error: password must contain at least one lowercase letter (a-z)!";
            return false;
        }
        if (!/[A-Z]/.test(value)) {
            content="Error: password must contain at least one uppercase letter (A-Z)!";
            return false;
        }
        return true;
    }




    static errorName(value) {
        return value
    }
}


