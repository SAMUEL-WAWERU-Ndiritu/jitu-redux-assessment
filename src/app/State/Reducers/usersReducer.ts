import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    isLoggedIn: true,
    user,
  }))
);
