import { SET_DATA } from "../actions/actions";
const initialState = {
  test: [],
};

function TestReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { posts: action.data };
      break;

    default:
      return state;
      break;
  }
}
export default TestReducer;
