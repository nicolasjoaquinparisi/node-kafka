import HTTPRequestError from "./HTTPRequestError";

export default class BadRequestError extends HTTPRequestError {
  constructor(message: string) {
    super({ message: message, status: 400 });
    this.name = "BadRequestError";
  }
}
