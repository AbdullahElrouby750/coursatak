//passRegex
const minLengthRegex = /^.{8,}$/;  // Minimum length of 8 characters
const digitRegex = /^(?=.*\d)/;    // At least one digit
const lowercaseRegex = /^(?=.*[a-z])/;  // At least one lowercase letter
const uppercaseRegex = /^(?=.*[A-Z])/;  // At least one uppercase letter
const specialCharRegex = /^(?=.*[!@#$%^&*])/;  // At least one special character
export function validatePassword(password) {
    if (!minLengthRegex.test(password)) {
        return "Password must be at least 8 characters long.";
    }
    if (!digitRegex.test(password)) {
        return "Password must contain at least one digit.";
    }
    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!uppercaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character (!@#$%^&*).";
    }
    return null;
}
//repassword validation
export function checkPassword(rePass, pass){
    if(rePass !== pass){
        return "Passwords do not match.";
    }
    return null;
}
