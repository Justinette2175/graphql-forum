import ForumsSeed from '../seed/forums.json';

import MessagesManager from './MessagesManager';
import UsersManager from './UsersManager';

class ForumsManager {
  constructor() {
    this._store = ForumsSeed;
  }

  getForums() {
    return this._store;
  }

  getForum({ forumId }) {
    return this._store.find((f) => f.id === forumId);
  }

  getMembersInForum({ forumId }) {
    const { members } = this.getForum({ forumId });
    return UsersManager
      .getUsers()
      .filter((user) => members.indexOf(user.id) > -1);
  }

  getMessagesInForum({ forumId }) {
  const { messages } = this.getForum({ forumId })
    return MessagesManager
      .getMessages()
      .filter((message) => messages.indexOf(message.id) > -1)
      .sort((m1, m2) => m2.timestamp - m1.timestamp);
  };
}

module.exports = new ForumsManager();