import uuid from 'uuidv4';

import MessagesSeed from '../seed/messages.json';

class MessagesManager {
  constructor() {
    this._store = MessagesSeed;
  }

  getMessages() {
    return this._store;
  }
}

module.exports = new MessagesManager();