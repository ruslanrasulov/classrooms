export const validateNumber = (number, message, fieldName) => {
    let validationMessage = null;

    if (!number && number !== 0) {
        validationMessage = `${fieldName} field is required`;
    } 
    else if (isNaN(+number))
    {
        validationMessage = 'Entered not a number';
    }

    if (validationMessage !== null) {
        message.isValid = false;
        message[fieldName] = validationMessage;
    }
};