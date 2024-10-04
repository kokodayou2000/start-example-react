import { configureStore } from '@reduxjs/toolkit';
import userInfo from '@/store/userReducer/useUserSlice.ts';
import { BaseUser } from '@/types';
import componentsReducer, {
  ComponentsStateType,
} from '@/store/componentsReducer';

export type StoreType = {
  userInfo: BaseUser;
  components: ComponentsStateType;
};
export default configureStore({
  reducer: {
    // 用户信息 {id,nickname}
    userInfo: userInfo,
    // 组件信息 undo redo
    components: componentsReducer,
  },
});
