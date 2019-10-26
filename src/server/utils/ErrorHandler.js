import { UserInputError } from 'apollo-server';

class ErrorHandler {
  throwUserInputError(text) {
    throw new UserInputError(text);
  }

  throwIfNoUser(user, f) {
    if (!user || !user.id) {
      throw new UserInputError('No user authenticated');
    }
    return f();
  };
}

const ErrorHandlerInstance = new ErrorHandler();

module.exports = ErrorHandlerInstance;