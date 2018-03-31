import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { MessageReducer } from './MessageReducer';

const rootReducer = combineReducers({
  message: MessageReducer,
  form: formReducer
});

export default rootReducer;
