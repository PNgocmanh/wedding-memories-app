
const initialState = {
  isLoading: true,
  error: null,
  post: []
}

const post = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'value':
      return state
    default:
      return state
  }
}

export default post;