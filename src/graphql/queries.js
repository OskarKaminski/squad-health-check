// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGroup = `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    description
    users {
      items {
        id
        name
      }
      nextToken
    }
    retrospectives {
      items {
        id
        date
        finished
      }
      nextToken
    }
    categories {
      items {
        id
        order
        descriptionGreen
        descriptionRed
      }
      nextToken
    }
  }
}
`;
export const listGroups = `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      users {
        items {
          id
          name
        }
        nextToken
      }
      retrospectives {
        items {
          id
          date
          finished
        }
        nextToken
      }
      categories {
        items {
          id
          order
          descriptionGreen
          descriptionRed
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    group {
      id
      description
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
      group {
        id
        description
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
    group {
      id
      description
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
      group {
        id
        description
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
    group {
      id
      description
    }
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
      group {
        id
        description
      }
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
