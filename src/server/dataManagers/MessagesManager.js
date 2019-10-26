import uuid from 'uuidv4';

import { ForumsStore, MessagesStore } from '../store';

class MessagesManager {
  getMessages() {
    return MessagesStore.getMessages();
  }

  createMessage({ text, forumId, userId }) {
    const messageId = uuid();
    const timestamp = Date.now();
    const newMessage = {
      text,
      writtenBy: userId,
      id: messageId,
      timestamp,
    };
    MessagesStore.createMessage(newMessage);
    ForumsStore.addMessageToForumMessages({ forumId, messageId });
    return newMessage;
  }
}

const MessagesManagerInstance = new MessagesManager()

module.exports = MessagesManagerInstance;