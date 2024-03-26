import { combineReducers } from 'redux';
import showMenu from './menuReducer';
import userReducer from './userSlice';
import forUpdatedUserReducer from './forUpdatedUserSlice';
import seasonTicketsReducer from './seasonTicketsSlice';

const rootReducer = combineReducers({
  menu: showMenu,
  user: userReducer,
  seasonTickets: seasonTicketsReducer,
  forUpdatedUser: forUpdatedUserReducer,
});

export default rootReducer;

      