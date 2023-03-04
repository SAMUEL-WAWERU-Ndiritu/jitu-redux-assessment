import { createAction, props } from '@ngrx/store';
i


export interface User {
    Id: number;
    Name: string;
    Email: string;
    Password: string;
  }
  

export const loginSuccess = createAction(
    '[Auth/API] Login Success',
    props<{ user: User }>()
  );
export const updateUserInfo = createAction(
  '[User] Update User Info',
  props<{ name: string; email: string }>()
);
export const selectUser = createAction('[User] Select User');

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);