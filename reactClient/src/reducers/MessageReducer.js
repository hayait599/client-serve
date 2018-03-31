import { createReducer } from 'redux-act';
import { storeMessage, storeInput } from './../actions/index';

export const MessageReducer = createReducer({
  [storeMessage]: (state, payload) => ({
    ...state,
    messages: [
      {
        messages: payload
      },
      ...state.messages
    ],
  }),
  [storeInput]: (state, payload) => ({
    ...state,
    text: payload
  }) 
   
}, { text: '', messages: [] });
