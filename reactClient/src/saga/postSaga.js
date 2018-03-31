import 'regenerator-runtime/runtime';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { addPost, fetchPosts, storePosts } from './../actions/index';
import { getRoute } from './../services/index';

//import  { WEATHER_API_KEY } from './../constants/config';
//import { getRoute } from './../services/index';
//const rootUrl = getRoute('weather_api') + WEATHER_API_KEY;

function* createPost(action) {
  try {
    yield console.log(action.payload);
    yield console.log(getRoute('post'));
   // yield fire.database.ref('post/postText').push(action.payload);
  //  const url = yield `${rootUrl}&q=${action.payload}`;
   // const response = yield axios.get(url);
   // console.log(url);
  ///  const data = yield response.data.list;
  //  yield put(storeWeather(data))
  } catch (error) {
    console.log(error);
  }
}

function* fetchPostsApi() {
  try {
    const response = yield axios.get(getRoute('post'));
    const data = response.data;
    yield put(storePosts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* postSaga() {
  yield takeLatest(addPost, createPost);
  yield takeLatest(fetchPosts, fetchPostsApi);
}
