export default {
  Mutation: {
    setCurrentUser: (_, { currentUser }, { cache }) => {
      cache.writeData({ data: { currentUser: currentUser } });
      return { currentUser , __typename: 'CurrentUserPayload' };
    }
  }
};