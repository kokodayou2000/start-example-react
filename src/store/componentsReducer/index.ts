import { ComponentPropType } from '@/components/QuestionComponents';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';
import {
  getNextSelectedId,
  insertNewComponent,
} from '@/store/componentsReducer/Utils.ts';
import _ from 'lodash';

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
  copiedComponent: ComponentInfoType | null; // 复制的组件
};
const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null,
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
        insertNewComponent(draft, newComp);
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
    // 拷贝当前选中的组件
    copySelectedComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft;
      const currSelectedComponent = componentList.find(
        (item) => item.fe_id === selectedId,
      );
      if (!currSelectedComponent) {
        return;
      }
      // 使用深拷贝避免引用
      draft.copiedComponent = _.cloneDeep(currSelectedComponent);
    }),
    pasteCopiedComponent: produce((draft: ComponentsStateType) => {
      const { copiedComponent } = draft;
      if (copiedComponent == null) {
        return;
      }
      // 修改fe_id
      copiedComponent.fe_id = nanoid();
      // 插入组件
      insertNewComponent(draft, copiedComponent);
    }),
    selectPrevComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft;
      const selectedIndex = componentList.findIndex(
        (c) => c.fe_id == selectedId,
      );
      if (selectedIndex < 0) {
        // 未选择组件
        return;
      }
      if (selectedIndex == 0) {
        // 已经选择了第一个，无法向上选中
        return;
      }
      draft.selectedId = componentList[selectedIndex - 1].fe_id;
    }),
    selectNextComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft;
      const length = componentList.length;
      const selectedIndex = componentList.findIndex(
        (c) => c.fe_id == selectedId,
      );
      if (selectedIndex >= length) {
        // 已经选择了第一个，无法向上选中
        return;
      }
      draft.selectedId = componentList[selectedIndex + 1].fe_id;
    }),
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
  copySelectedComponent,
  pasteCopiedComponent,
  selectPrevComponent,
  selectNextComponent,
} = componentsSlice.actions;
export default componentsSlice.reducer;
