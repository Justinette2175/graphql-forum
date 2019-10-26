import uuid from 'uuidv4';

import MessagesSeed from '../seed/messages.json';

import UsersManager from './UsersManager';

class MessagesManager {
  constructor() {
    this._store = MessagesSeed;
  }

  getMessages() {
    return this._store;
  }
}

module.exports = new MessagesManager();