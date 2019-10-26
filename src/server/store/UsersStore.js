import UsersSeed from '../seed/users.json';

class UsersStore {
  constructor() {
    this._store = UsersSeed;
  }

  getUsers() {
    return this._store;
  }

  getUser({ userId }) {
    return this._store.find((user) => user.id === userId);
  }

  createMessage(newMessage) {
    this._store.push(newMessage);
    return newMessage;
  };
}

const usersStoreInstance = new UsersStore();

module.exports = usersStoreInstance;