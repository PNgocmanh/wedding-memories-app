
const initialState = {
  isLoading: true,
  error: null,
  profile: []
}

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'value':
      return state
    default:
      return state
  }
}

export default user;