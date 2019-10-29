import { forums as ForumsSeed } from '../seed';
import { ErrorHandler } from '../utils';


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
      ErrorHandler.throwUserInputError('This forum does not exist!');
    }
    return forum;
  }

  getForumMembers({ forumId }) {
    return this.getForum({ forumId }).members || [];
  }

  getForumMessages({ forumId }) {
    return this.getForum({ forumId }).messages || [];
  }

  _getIndexOfForum({ forumId }) {
    const indexOfForum = this._store.findIndex((f) => f.id === forumId);
    if (indexOfForum < 0) {
      ErrorHandler.throwUserInputError('This forum does not exist!');
    }
    return indexOfForum;
  }

  addMemberToForumMembers({ forumId, userId }) {
    const indexOfForum = this._getIndexOfForum({ forumId });
    if (this._store[indexOfForum].members.indexOf(userId) < 0) {
      this._store[indexOfForum].members.push(userId);
      return this._store[indexOfForum];
    }
    ErrorHandler.throwUserInputError('This user is already in the forum.');
  }

  addMessageToForumMessages({ forumId, messageId }) {
    const indexOfForum = this._getIndexOfForum({ forumId });
    if (this._store[indexOfForum].messages.indexOf(messageId) < 0) {
      this._store[indexOfForum].messages.push(messageId);
      return this._store[indexOfForum];
    }
    ErrorHandler.throwUserInputError('This message is already in the forum');
  }

  createForum(newForum) {
    this._store.push(newForum);
    return newForum;
  };

  isUserAForumMember({ userId, forumId }) {
    return this.getForum({ forumId }).members.indexOf(userId) > -1;
  }
}

const ForumsStoreInstance = new ForumsStore();

module.exports = ForumsStoreInstance;