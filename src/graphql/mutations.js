// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGroup = `mutation CreateGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
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
export const updateGroup = `mutation UpdateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
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
export const deleteGroup = `mutation DeleteGroup($input: DeleteGroupInput!) {
  deleteGroup(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
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
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
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
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
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
export const createRetrospective = `mutation CreateRetrospective($input: CreateRetrospectiveInput!) {
  createRetrospective(input: $input) {
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
export const updateRetrospective = `mutation UpdateRetrospective($input: UpdateRetrospectiveInput!) {
  updateRetrospective(input: $input) {
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
export const deleteRetrospective = `mutation DeleteRetrospective($input: DeleteRetrospectiveInput!) {
  deleteRetrospective(input: $input) {
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
export const createAnswer = `mutation CreateAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
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
export const updateAnswer = `mutation UpdateAnswer($input: UpdateAnswerInput!) {
  updateAnswer(input: $input) {
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
export const deleteAnswer = `mutation DeleteAnswer($input: DeleteAnswerInput!) {
  deleteAnswer(input: $input) {
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
