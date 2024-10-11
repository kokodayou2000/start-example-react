import { ComponentInfoType } from '@/store/componentsReducer/index.ts';

export function getNextSelectedId(
  fe_id: string,
  componentList: Array<ComponentInfoType>,
) {
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
