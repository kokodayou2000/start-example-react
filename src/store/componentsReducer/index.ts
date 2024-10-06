import { ComponentPropType } from '@/components/QuestionComponents';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ComponentInfoRaw = {
  id: string;
  type: string;
  title: string;
  props: string;
};

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentPropType;
};
// 一种列表的形式
export type ComponentsStateType = {
  componentList: Array<ComponentInfoType>;
};
const INIT_STATE: ComponentsStateType = {
  componentList: [],
};
export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (
      _: ComponentsStateType,
      action: PayloadAction<ComponentsStateType>,
    ) => {
      return action.payload;
    },
  },
});

export const { resetComponents } = componentsSlice.actions;
export default componentsSlice.reducer;
