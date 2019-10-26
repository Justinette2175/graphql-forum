```
type User {
  userName: String!
  avatar: String!
  forums: [Forum]
  id: String!
}

type Forum {
  messages: [Message]
  members: [User]
  id: String!
  name: String!
  admin: User!
  private: Boolean
}

type Message {
  writtenBy: User!
  text: String!
  timestamp: String!
  id: String!
}

enum RequestStatus {
  PENDING
  REFUSED
  APPROVED
}

type JoinForumRequest {
  forum: Forum!
  userToJoin: User!
  status: RequestStatus!
  id: String!
}

type Query {
  forums: [Forum]
  forum(id: String!): Forum
  user(id: String!): User
}

type Mutation {
  joinForum(forumId: String!): Forum
  createForum(name: String!, private: Boolean): Forum
  postMessage(text: String!, forumId: String!): Message
  createJoinForumRequest(id: String!): JoinForumRequest
  editJoinForumRequestStatus(requestId: String!, status: RequestStatus!): Forum
}

type Subscription {
  newJoinForumRequest(requestId: String!): JoinForumRequest
  newJoinForumStatus(requestId: String!): Forum
}
```
