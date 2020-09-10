
import { RENDER_TODO_LIST } from '../actions';


const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
        return {
          ...state,
          toDoList: action.toDoList
        };
    
    default:
      return state;
  }
}