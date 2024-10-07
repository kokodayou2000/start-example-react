import { FC } from 'react';
import {
  componentConfGroup,
  ComponentConfType,
} from '@/components/QuestionComponents';
import { Typography } from 'antd';
import styles from './ComponentLib.module.scss';

const { Title } = Typography;
function genComponent(comp: ComponentConfType) {
  const { Component } = comp;
  return (
    <div className={styles.wrapper}>
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
