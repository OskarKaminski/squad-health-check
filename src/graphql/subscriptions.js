// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateGroup = `subscription OnCreateGroup {
  onCreateGroup {
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
export const onUpdateGroup = `subscription OnUpdateGroup {
  onUpdateGroup {
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
export const onDeleteGroup = `subscription OnDeleteGroup {
  onDeleteGroup {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateRetrospective = `subscription OnCreateRetrospective {
  onCreateRetrospective {
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
export const onUpdateRetrospective = `subscription OnUpdateRetrospective {
  onUpdateRetrospective {
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
export const onDeleteRetrospective = `subscription OnDeleteRetrospective {
  onDeleteRetrospective {
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
export const onCreateAnswer = `subscription OnCreateAnswer {
  onCreateAnswer {
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
export const onUpdateAnswer = `subscription OnUpdateAnswer {
  onUpdateAnswer {
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
export const onDeleteAnswer = `subscription OnDeleteAnswer {
  onDeleteAnswer {
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
