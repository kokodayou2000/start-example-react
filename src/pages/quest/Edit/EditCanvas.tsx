import { FC } from 'react';
import styles from './EditCanvas.module.scss';

import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Component.tsx';
import QuestionInput from '@/components/QuestionComponents/QuestionInput/Component.tsx';
import { Spin } from 'antd';

type PropsType = {
  loading: boolean;
};
const EditCanvas: FC<PropsType> = ({ loading }: PropsType) => {
  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  } else {
    return (
      <div className={styles['canvas']}>
        <div className={styles['component-wrapper']}>
          <div className={styles['component']}>
            <QuestionInput title={'自定义标题'} placeholder={'请输入数据'} />
          </div>
        </div>
        <div className={styles['component-wrapper']}>
          <div className={styles['component']}>
            <QuestionTitle text={'自定义标题 '} level={1} center={true} />
          </div>
        </div>
      </div>
    );
  }
};

export default EditCanvas;
