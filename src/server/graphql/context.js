import USERS from '../seed/users.json';
const CURRENT_USER_ID = USERS[0].id;

const context = () => {
  // In a real application, we would authenticate user here.
  // For now, we mimick behavior by hard-coding current user.
  return {
    user: {
      id: CURRENT_USER_ID,
    },
  };
};

module.exports = context;