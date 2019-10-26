import uuid from 'uuidv4';
import { UserInputError } from 'apollo-server';

import { ForumsStore, MessagesStore } from '../store';
import ErrorHandler from '../utils/ErrorHandler';

class MessagesManager {
  getMessages() {
    return MessagesStore.getMessages();
  }

  createMessage({ text, forumId, userId }) {
    const isAllowed = ForumsStore.isUserAForumMember({ userId, forumId });
    if (!isAllowed) {
      ErrorHandler.throwUserInputError('This user is not in this forum. They cannot post a message.');
    }
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