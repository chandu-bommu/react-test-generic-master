import { GET_MESSAGES } from "../constants/action-types";

const initialState = {
  messages: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_MESSAGES) {
    return Object.assign({}, state, {
        messages: state.messages.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;