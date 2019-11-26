import { validateNumber } from './validation';

const validateAuditorium = ({ number, floor, capacity, type }) => {
    const message = { isValid: true };

    validateNumber(number, message, 'number');
    validateNumber(floor, message, 'floor');
    validateNumber(capacity, message, 'capacity');
    validateNumber(type, message, 'type');
    validateAuditoriumType(type, message);

    return message;
};

const validateAuditoriumType = (type, message) => {
    if (type > 2 || type < 0) {
        message.isValid = false;
        message.type = "Type value must be in range from 0 to 2";
    }
};

export default validateAuditorium;