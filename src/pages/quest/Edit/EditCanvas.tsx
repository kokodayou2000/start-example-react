import { FC, MouseEvent } from 'react';
import styles from './EditCanvas.module.scss';

import { Spin } from 'antd';
import useGetComponentInfo from '@/hooks/useGetComponentInfo.ts';
import { getComponentConfByType } from '@/components/QuestionComponents';
import { changeSelectedId, ComponentInfoType } from '@/store/componentsReducer';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

type PropsType = {
  loading: boolean;
};
function genComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo;
  const componentConf = getComponentConfByType(type);
  if (!componentConf) {
    return <div />;
  }
  const { Component } = componentConf;
  return <Component {...props} />;
}
const EditCanvas: FC<PropsType> = ({ loading }: PropsType) => {
  const { componentList, selectedId } = useGetComponentInfo();
  const dispatch = useDispatch();
  function handleClick(event: MouseEvent, id: string) {
    event.stopPropagation();
    dispatch(changeSelectedId(id));
  }
  const list = componentList.map((item) => {
    const { fe_id, hidden } = item;
    if (hidden === true) {
      return;
    }
    // 拼接 classname
    const wrapperDefaultClassname = styles['component-wrapper'];
    const selectedClassName = styles.selected;
    const wrapperClassName = classNames({
      [wrapperDefaultClassname]: true,
      [selectedClassName]: fe_id === selectedId,
    });
    return (
      <div
        key={fe_id}
        className={wrapperClassName}
        onClick={(event) => handleClick(event, fe_id)}
      >
        <div className={styles['component']}>{genComponent(item)}</div>
      </div>
    );
  });
  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  } else {
    return <div className={styles['canvas']}>{list}</div>;
  }
};

export default EditCanvas;
