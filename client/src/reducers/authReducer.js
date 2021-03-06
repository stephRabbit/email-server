import { FETCH_USER, LOGOUT_USER } from '../actions/types';

// FETCH_USER
// null => await user status
// is logged in => user model contain ID
// not logged in => false

export default (state = null, action) => {
  // console.log(action)
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return action.payload || false;
    case LOGOUT_USER:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}