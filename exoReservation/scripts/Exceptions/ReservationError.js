export class ReservationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ReservationError';
        this.field = field;
    }
}