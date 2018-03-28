import { createReducer } from 'redux-act';
import { storeMessage, storeInput, storeKey, storeTypingState } from './../actions/index';

export const MessageReducer = createReducer({
  [storeMessage]: (state, payload) => ({
    ...state,
    messages: [
      { messages: payload },
      ...state.messages
    ],
  }),
  [storeInput]: (state, payload) => ({
    ...state,
    text: payload
  }),
  [storeKey]: (state, payload) => ({
    ...state,
    key: payload
  }),
  [storeTypingState]: (state, payload) => ({
    ...state,
    typingFlag: payload
  }),
}, { text: '', messages: [], key: '', typingFlag: false });
