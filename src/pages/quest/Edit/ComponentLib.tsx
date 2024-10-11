import { FC } from 'react';
import {
  componentConfGroup,
  ComponentConfType,
} from '@/components/QuestionComponents';
import { Typography } from 'antd';
import styles from './ComponentLib.module.scss';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/store/componentsReducer';
import { nanoid } from '@reduxjs/toolkit';

const { Title } = Typography;
function genComponent(comp: ComponentConfType) {
  const { title, type, Component, defaultProps } = comp;
  const dispatch = useDispatch();
  // 点击添加到画布，并处于选中状态
  function handleClick() {
    // TODO 存放到 mongodb中
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title,
        type,
          hidden: true,
        props: defaultProps,
      }),
    );
  }
  return (
    <div key={type} className={styles.wrapper} onClick={handleClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  );
}
const Lib: FC = () => {
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupName, components } = group;
        return (
          <div key={index}>
            <Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
            >
              {groupName}
            </Title>

            {components.map((comp) => {
              return genComponent(comp);
            })}
          </div>
        );
      })}
    </>
  );
};

export default Lib;
