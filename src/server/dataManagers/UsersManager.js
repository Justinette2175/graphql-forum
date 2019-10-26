import { UserInputError } from 'apollo-server';

import { ForumsStore, UsersStore } from '../store';

class UsersManager {
  getUsers() {
    return UsersStore.getUsers();
  }
 
  getUser({ userId }) {
    return UsersStore.getUser({ userId });
  }

  getUserForums({ userId }) {
    return ForumsStore.getForums()
      .filter((forum) => forum.members.indexOf(userId) > -1);
  } 
}

const UsersManagerInstance = new UsersManager();

module.exports = UsersManagerInstance;