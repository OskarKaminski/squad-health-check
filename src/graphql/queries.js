// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    whatevers {
      id
      name
    }
    answers {
      items {
        id
        value
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      whatevers {
        id
        name
      }
      answers {
        items {
          id
          value
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getWhatever = `query GetWhatever($id: ID!) {
  getWhatever(id: $id) {
    id
    name
    users {
      id
      name
    }
  }
}
`;
export const listWhatevers = `query ListWhatevers(
  $filter: ModelWhateverFilterInput
  $limit: Int
  $nextToken: String
) {
  listWhatevers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      users {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    order
    descriptionGreen
    descriptionRed
    answers {
      id
      value
    }
  }
}
`;
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      order
      descriptionGreen
      descriptionRed
      answers {
        id
        value
      }
    }
    nextToken
  }
}
`;
export const getRetrospective = `query GetRetrospective($id: ID!) {
  getRetrospective(id: $id) {
    id
    date
    answers {
      items {
        id
        value
      }
      nextToken
    }
    finished
  }
}
`;
export const listRetrospectives = `query ListRetrospectives(
  $filter: ModelRetrospectiveFilterInput
  $limit: Int
  $nextToken: String
) {
  listRetrospectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      answers {
        items {
          id
          value
        }
        nextToken
      }
      finished
    }
    nextToken
  }
}
`;
export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    user {
      id
      name
    }
    retrospective {
      id
      date
      finished
    }
    category {
      id
      order
      descriptionGreen
      descriptionRed
    }
    value
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        name
      }
      retrospective {
        id
        date
        finished
      }
      category {
        id
        order
        descriptionGreen
        descriptionRed
      }
      value
    }
    nextToken
  }
}
`;
