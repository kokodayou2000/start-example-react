import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseUser } from '@/types';

const INIT_BASE_USER_INFO: BaseUser = {
  id: '',
  nickname: '',
};

// 用户登录登出
export const useUserSlice = createSlice({
  name: 'userLoginInfo',
  initialState: INIT_BASE_USER_INFO,
  reducers: {
    login: (_state: BaseUser, action: PayloadAction<BaseUser>) => {
      return action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout: (_state: BaseUser) => {
      return INIT_BASE_USER_INFO;
    },
  },
});

export const { login, logout } = useUserSlice.actions;

export default useUserSlice.reducer;
