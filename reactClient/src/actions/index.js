import { createAction } from 'redux-act';

export const sendMessage = createAction('CREATE_ANEW_MESSAGE');
export const storeInput = createAction('MESSAGE_INPUT');
export const receiverMessage = createAction('RECEIVE_MESSAGE');
export const storeMessage = createAction('STORE_MESSAGE');
export const storeKey = createAction('STORE_USER_KEY');
export const typing = createAction('TYPING');
export const typingState = createAction('TYPING_STATE');
export const storeTypingState = createAction('STORE_TYPING_STATE');
