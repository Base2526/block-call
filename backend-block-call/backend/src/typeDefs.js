const gql = require('graphql-tag');

export default gql`
  scalar DATETIME
  scalar Long
  scalar Date
  scalar JSON

  scalar Upload

  type Query {
    test(input: JSON): JSON
  }  
  
  type Mutation {
    login(input: JSON): JSON
    register(input: JSON): JSON
  }

  type Subscription {
    userConnected: String
  }
`;
