import uuid from 'uuidv4';

import { ForumsStore, MessagesStore, UsersStore } from '../store';

class ForumsManager {
  getForums() {
    return ForumsStore.getForums();
  }

  getForum({ forumId }) {
    return ForumsStore.getForum({ forumId });
  }

  createForum({ name, userId }) {
    const newForum = {
      name,
      members: [userId],
      messages: [],
      id: uuid(),
    };
    ForumsStore.createForum(newForum);
    return newForum;
  };

  getMembersInForum({ forumId }) {
    const { members } = this.getForum({ forumId });
    return UsersStore
      .getUsers()
      .filter((user) => members.indexOf(user.id) > -1);
  }

  addMemberToForum({ forumId, userId }) {
    return ForumsStore.addMemberToForumMembers({ forumId, userId })
  }

  getMessagesInForum({ forumId }) {
    const { messages } = this.getForum({ forumId })
    return MessagesStore
      .getMessages()
      .filter((message) => messages.indexOf(message.id) > -1)
      .sort((m1, m2) => m2.timestamp - m1.timestamp);
  };

}

const ForumsManagerInstance = new ForumsManager()

module.exports = ForumsManagerInstance;