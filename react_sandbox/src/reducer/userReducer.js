function userReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };

    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.user],
        inputs: {
          username: '',
          email: '',
        },
      };

    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
      };

    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

export default userReducer;
