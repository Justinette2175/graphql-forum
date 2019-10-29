import { messages as MessagesSeed } from '../seed';

class MessagesStore {
  constructor() {
    this._store = MessagesSeed;
  }

  getMessages() {
    return this._store;
  }

  createMessage(newMessage) {
    this._store.push(newMessage);
    return newMessage;
  };
}

const MessagesStoreInstance = new MessagesStore();

module.exports = MessagesStoreInstance;