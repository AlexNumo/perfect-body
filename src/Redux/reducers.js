import { combineReducers } from 'redux';
import showMenu from './menuReducer';

const rootReducer = combineReducers({
  menu: showMenu,
});

export default rootReducer;

      