import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  if (response.status === 200) {
    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/home');
  } else {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
