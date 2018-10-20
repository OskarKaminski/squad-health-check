// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createWhatever = `mutation CreateWhatever($input: CreateWhateverInput!) {
  createWhatever(input: $input) {
    id
    name
    users {
      id
      name
    }
  }
}
`;
export const updateWhatever = `mutation UpdateWhatever($input: UpdateWhateverInput!) {
  updateWhatever(input: $input) {
    id
    name
    users {
      id
      name
    }
  }
}
`;
export const deleteWhatever = `mutation DeleteWhatever($input: DeleteWhateverInput!) {
  deleteWhatever(input: $input) {
    id
    name
    users {
      id
      name
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
  }
}
`;
export const createRetrospective = `mutation CreateRetrospective($input: CreateRetrospectiveInput!) {
  createRetrospective(input: $input) {
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
export const updateRetrospective = `mutation UpdateRetrospective($input: UpdateRetrospectiveInput!) {
  updateRetrospective(input: $input) {
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
export const deleteRetrospective = `mutation DeleteRetrospective($input: DeleteRetrospectiveInput!) {
  deleteRetrospective(input: $input) {
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
