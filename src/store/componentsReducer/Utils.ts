import {ComponentInfoType, ComponentsStateType} from '@/store/componentsReducer/index.ts';

export function getNextSelectedId(
  fe_id: string,
  componentList: Array<ComponentInfoType>,
) {
  const visibleComponentList = componentList.filter((item) => !item.hidden);
  componentList = visibleComponentList;
  const index = componentList.findIndex((item) => item.fe_id === fe_id);
  if (index < 0) return '';
  const len = componentList.length;
  let newSelectedId = '';
  if (len <= 1) {
    newSelectedId = '';
  } else {
    // 删除最后一个
    if (index + 1 === len) {
      newSelectedId = componentList[index - 1].fe_id;
    } else {
      // 删除的不是最后一个
      newSelectedId = componentList[index + 1].fe_id;
    }
  }
  return newSelectedId;
}

export function insertNewComponent(draft: ComponentsStateType,newComp: ComponentInfoType) {
  newComp.hidden = false;
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
}