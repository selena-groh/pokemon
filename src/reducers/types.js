import { RECEIVE_TYPES } from "../actions/types";

export default function types(state = [], action) {
  switch (action.type) {
    case RECEIVE_TYPES:
      return action.types;
    default:
      return state;
  }
}
