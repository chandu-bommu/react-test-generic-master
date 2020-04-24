import { GET_MESSAGES_FULFILLED } from "../constants/action-types";

const initialState = {
  messages: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_MESSAGES_FULFILLED) {
    return Object.assign({}, state, {
      messages: action.payload
    });
  }
  return state;
}

export default rootReducer;