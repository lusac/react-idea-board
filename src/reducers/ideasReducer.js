import initialState from './initialState';
import {FETCH_IDEAS, RECEIVE_IDEAS} from '../actions/allActions';

export default function ideas(state = initialState.ideas, action) {
  let newState;
  switch (action.type) {
    case FETCH_IDEAS:
      console.log('FETCH_IDEAS Action')
      return action;
    case RECEIVE_IDEAS:
      newState = action.ideas;
      console.log('RECEIVE_IDEAS Action')
      return newState;
    default:
      return state;
  }
}
