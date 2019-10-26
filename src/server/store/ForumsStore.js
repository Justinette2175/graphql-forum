import ForumsSeed from '../seed/forums.json';

import { UserInputError } from 'apollo-server';

class ForumsStore {
  constructor() {
    this._store = ForumsSeed;
  }

  getForums() {
    return this._store;
  }

  getForum({ forumId }) {
    const forum = this._store.find((f) => f.id === forumId);
    if (!forum) {
      throw new UserInputError('This forum does not exist!');
    }
    return forum;
  }

  _getIndexOfForum({ forumId }) {
    const indexOfForum = this._store.findIndex((f) => f.id === forumId);
    if (indexOfForum < 0) {
      throw new UserInputError('This forum does not exist!');
    }
    return indexOfForum;
  }

  addMemberToForumMembers({ forumId, userId }) {
    const indexOfForum = this._getIndexOfForum({ forumId });
    if (this._store[indexOfForum].members.indexOf(userId) < 0) {
      this._store[indexOfForum].members.push(userId);
      return this._store[indexOfForum];
    }
    throw new UserInputError('This user is already in the forum.');
  }

  addMessageToForumMessages({ forumId, messageId }) {
    const indexOfForum = this._getIndexOfForum({ forumId });
    if (this._store[indexOfForum].messages.indexOf(messageId) < 0) {
      this._store[indexOfForum].messages.push(messageId);
      return this._store[indexOfForum];
    }
    throw new UserInputError('This message is already in the forum');
  }

  createForum(newForum) {
    this._store.push(newForum);
    return newForum;
  };
}

const ForumsStoreInstance = new ForumsStore();

module.exports = ForumsStoreInstance;