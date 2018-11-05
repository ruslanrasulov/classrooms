import { validateNumber } from './validation';

const validateHousing = ({ number }) => {
    const message = { isValid: true };

    validateNumber(number, message, 'number');

    return message;
};

export default validateHousing;