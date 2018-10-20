// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateWhatever = `subscription OnCreateWhatever {
  onCreateWhatever {
    id
    name
    users {
      id
      name
    }
  }
}
`;
export const onUpdateWhatever = `subscription OnUpdateWhatever {
  onUpdateWhatever {
    id
    name
    users {
      id
      name
    }
  }
}
`;
export const onDeleteWhatever = `subscription OnDeleteWhatever {
  onDeleteWhatever {
    id
    name
    users {
      id
      name
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
  }
}
`;
export const onCreateRetrospective = `subscription OnCreateRetrospective {
  onCreateRetrospective {
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
export const onUpdateRetrospective = `subscription OnUpdateRetrospective {
  onUpdateRetrospective {
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
export const onDeleteRetrospective = `subscription OnDeleteRetrospective {
  onDeleteRetrospective {
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
