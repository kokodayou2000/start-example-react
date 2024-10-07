import { ComponentPropType } from '@/components/QuestionComponents';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

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
  selectedId: string;
  componentList: Array<ComponentInfoType>;
};
const INIT_STATE: ComponentsStateType = {
  selectedId: '',
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
    changeSelectedId: produce(
      (draft: ComponentsStateType, action: PayloadAction<string>) => {
        draft.selectedId = action.payload;
        // 使用 immer 能优化 react state 不可变数据的写法
      },
    ),
    addComponent: produce(
        (draft: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
          const newComp = action.payload
          // 放置的位置 ...
          const {selectedId,componentList} = draft;
          const index = componentList.findIndex((item) => item.fe_id === selectedId);
          if (index < 0){
            draft.componentList.push(newComp);
          }else{
            // 插入到 index 后面
            draft.componentList.splice(index+1,0,newComp);
          }
          draft.selectedId = newComp.fe_id;
        },
    ),
  },
});

export const { resetComponents, changeSelectedId,addComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
