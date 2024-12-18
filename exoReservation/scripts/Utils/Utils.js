import { ValidationError, ValidateDateError } from "../exceptions/ValidationError.js";
export class Utils {

    static printDebug(message,data) {
        console.error(`${message} type de la variable ${typeof (data)}`)
    }

    static validateEmail(email) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(email)) {
            throw new ValidationError(
                `⛔ L'email ${email} est invalide !`,
                "email"
            );
        }
        return email;
    }

    static validateDate(date) {
        const selectedDate = new Date(date);
        const today = new Date();
        if (selectedDate < today) {
            throw new ValidationError(
                `⛔ La date ne peut pas être dans le passé !`,
                "date"
            );
        }
        return date;
    }

    static validateName(name, fieldName) {
        if (name.length < 3 || name.length > 20) {
            throw new ValidationError(
                `Le champ doit contenir entre 3 et 20 caractères. Votre saisie : ${name.length}`,
                fieldName
            );
        }
        return name;
    }
}