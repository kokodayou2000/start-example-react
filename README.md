onChange 会被同步到 reduct store中

具体代码 
ComponentProp
```tsx
import { FC } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo.ts';
import {
  ComponentPropType,
  getComponentConfByType,
} from '@/components/QuestionComponents';
import { useDispatch } from 'react-redux';
import { changeComponentProps } from '@/store/componentsReducer';

const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选择组件</div>;
};

const ComponentProp: FC = () => {
  const { selectedComponent } = useGetComponentInfo();
  if (!selectedComponent) {
    return <NoProp />;
  }
  const { fe_id, type, props, locked, hidden } = selectedComponent;
  const componentConfByType = getComponentConfByType(type);
  if (!componentConfByType) {
    return <NoProp />;
  }
  const { PropComponent } = componentConfByType;

  const dispatch = useDispatch();

  function changeProps(newProp: ComponentPropType) {
    if (!newProp) {
      return;
    }
    // 执行修改
    dispatch(changeComponentProps({ fe_id, newProp }));
  }

  return (
    <PropComponent
      {...props}
      onChange={changeProps}
      disabled={locked || hidden}
    />
  );
};

export default ComponentProp;
```

ComponentProp 中定义了 onChange的实现方法

