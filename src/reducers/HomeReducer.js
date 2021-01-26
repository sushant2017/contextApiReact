import { SET_DATA } from "../actions/actions";
export const initialState = {
  posts: [],
};

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { posts: action.data };
      break;

    default:
      return state;
      break;
  }
}
export default HomeReducer;
