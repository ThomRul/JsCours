export class ValidationError extends Error {
    constructor(message,field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

export class ValidateDateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidateDateError';
    }
}