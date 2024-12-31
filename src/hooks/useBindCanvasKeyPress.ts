// 绑定快捷键
import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import {
  copySelectedComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
} from '@/store/componentsReducer';
function activeElementValidate() {
  const activeElement = document.activeElement;
  if (activeElement === document.body) {
    // 光标没有 force input 上
    return true;
  }
  return false;
}
function useBindCanvasKeyPress() {
  const dispatch = useDispatch();

  // 删除组件
  useKeyPress(['backspace', 'delete'], () => {
    if (activeElementValidate()) {
      dispatch(removeSelectedComponent());
    }
  });

  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (activeElementValidate()) {
      dispatch(copySelectedComponent());
    }
  });

  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (activeElementValidate()) {
      dispatch(pasteCopiedComponent());
    }
  });
}

export default useBindCanvasKeyPress;
