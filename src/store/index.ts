import { configureStore } from '@reduxjs/toolkit';
import userInfo from '@/store/useUserSlice.ts';
import { BaseUser } from '@/types';

export type StoreType = {
  userInfo: BaseUser;
};
export default configureStore({
  reducer: {
    // 用户信息 {id,nickname}
    userInfo: userInfo,
    // 组件信息 undo redo
  },
});
