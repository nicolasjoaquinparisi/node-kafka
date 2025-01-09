import HTTPRequestError from "./HTTPRequestError";

export default class ConflictError extends HTTPRequestError {
  constructor(message: string) {
    super({ message: message, status: 409 });
    this.name = "ConflictError";
  }
}
