import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import promiseMiddleware from 'redux-promise-middleware';

// export function reducer(state, action = {}) {
//   return Object.assign({}, state, {
//     messages: action.payload
//   });
// }

export const store = createStore(rootReducer, {}, applyMiddleware(
  promiseMiddleware()
));