import UsersSeed from '../seed/users.json';

import ForumsManager from './ForumsManager';

class UsersManager {
  constructor() {
    this._store = UsersSeed;
  }

  getUsers() {
    return this._store;
  }

  getUser({ userId }) {
    return this._store.find((user) => user.id === userId);
  }

  getUserForums({ userId }) {
    return ForumsManager.getForums()
      .filter((forum) => forum.members.indexOf(userId) > -1);
  } 
}

module.exports = new UsersManager();