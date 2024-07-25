import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INIT_STATE = { username: '', nickname: '' } as UserStateType;

export const userSlice = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    loginReducer: (
      _state: UserStateType,
      action: PayloadAction<UserStateType>,
    ) => {
      return action.payload;
    },
    logoutReducer: () => INIT_STATE,
  },
});

export const { loginReducer, logoutReducer } = userSlice.actions;

export default userSlice.reducer;