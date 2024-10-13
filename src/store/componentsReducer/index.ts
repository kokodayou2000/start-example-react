import { ComponentPropType } from '@/components/QuestionComponents';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { getNextSelectedId } from '@/store/componentsReducer/Utils.ts';

export type ComponentInfoRaw = {
  id: string;
  type: string;
  title: string;
  hidden: boolean;
  locked: boolean;
  props: string;
};

export type ComponentInfoType = {
  fe_id: string; // 前端生成的，避免和后端 mongodb生成的重复
  type: string;
  title: string;
  hidden: boolean;
  locked: boolean;
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
      (
        draft: ComponentsStateType,
        action: PayloadAction<ComponentInfoType>,
      ) => {
        const newComp = action.payload;
        // 放置的位置 ...
        const { selectedId, componentList } = draft;
        const index = componentList.findIndex(
          (item) => item.fe_id === selectedId,
        );
        if (index < 0) {
          draft.componentList.push(newComp);
        } else {
          // 插入到 index 后面
          draft.componentList.splice(index + 1, 0, newComp);
        }
        draft.selectedId = newComp.fe_id;
      },
    ),

    changeComponentProps: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; newProp: ComponentPropType }>,
      ) => {
        const { fe_id, newProp } = action.payload;
        // 放置的位置 ...
        const { componentList } = draft;
        const curComp = componentList.find((item) => item.fe_id === fe_id);
        if (curComp) {
          // 修改组件属性
          curComp.props = {
            ...curComp.props,
            ...newProp,
          };
        }
      },
    ),
    removeSelectedComponent: produce((draft: ComponentsStateType) => {
      const { componentList = [], selectedId: removeId } = draft;
      // 重新计算selectId
      const newSelectedId = getNextSelectedId(removeId, componentList);
      draft.selectedId = newSelectedId;
      const index = componentList.findIndex((item) => item.fe_id === removeId);
      componentList.splice(index, 1);
    }),
    changeVisibleComponent: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; hidden: boolean }>,
      ) => {
        const { componentList = [] } = draft;
        const { fe_id, hidden } = action.payload;

        let newSelectedId = '';
        if (hidden) {
          // 隐藏
          // 重新计算selectId
          newSelectedId = getNextSelectedId(fe_id, componentList);
        } else {
          // 重新计算selectId
          newSelectedId = fe_id;
        }
        draft.selectedId = newSelectedId;
        const currComp = componentList.find((item) => item.fe_id === fe_id);
        if (currComp) {
          currComp.hidden = hidden;
        }
      },
    ),
    toggleComponentLocked: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string }>,
      ) => {
        const { componentList = [] } = draft;
        const { fe_id } = action.payload;
        const currComp = componentList.find((item) => item.fe_id === fe_id);
        if (currComp) {
          currComp.locked = !currComp.locked;
        }
      },
    ),
  },
});

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeVisibleComponent,
  toggleComponentLocked,
} = componentsSlice.actions;
export default componentsSlice.reducer;
