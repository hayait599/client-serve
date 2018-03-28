import 'regenerator-runtime/runtime';
import { put, takeEvery, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import {
  sendMessage,
  storeMessage,
  receiverMessage,
  typing,
  typingState,
  storeTypingState
} from './../actions/index';
import { getRoute } from './../services/index';

const socket = io(getRoute());
const getKey = state => state.message.key;

function* addMessage(action) {
  try {
    const messageContent = action.payload;
    const chatKey = yield select(getKey);
    socket.emit('add message', { messageContent, chatKey });
    socket.emit('add');
  } catch (error) {
    yield console.log(error);
  }
}
function* fetchMessage() {
  try {
    const channel = eventChannel(emitter => {
      socket.on('message added', (data) => {
        emitter({ data });
      });
      return () => {
        socket.end();
      };
    });
    while (true) {
      const { data } = yield take(channel);
      if (!data) {
        break;
      }
      const messageContent = data.messageContent;
      const key = data.chatKey;
      yield put(storeMessage({ messageContent, key }));
    }
  } catch (error) {
    yield console.log(error);
  }
}
function* typingMessage(action) {
  try {
    const flag = action.payload;
    socket.emit('typing', flag);
    socket.emit('add');
  } catch (error) {
    yield console.log(error);
  }
}
function* fetchTypingState() {
  try {
    const channel = eventChannel(emitter => {
      socket.on('typing state', (data) => {
        emitter({ data });
      });
      return () => {
        socket.end();
      };
    });
    while (true) {
      const { data } = yield take(channel);
      yield put(storeTypingState(data));
    }
  } catch (error) {
    yield console.log(error);
  }
}
export function* chatSaga() {
  yield takeEvery(sendMessage, addMessage);
  yield takeEvery(receiverMessage, fetchMessage);
  yield takeEvery(typing, typingMessage);
  yield takeEvery(typingState, fetchTypingState);
}
