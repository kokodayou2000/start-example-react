import { FC } from 'react';
import styles from './Edit.module.scss';
import EditCanvas from '@/pages/quest/Edit/EditCanvas.tsx';
import useLoadQuestionData from '@/hooks/useLoadQuestionData.ts';
import { useDispatch } from 'react-redux';
import { changeSelectedId } from '@/store/componentsReducer';
import LeftPanel from '@/pages/quest/Edit/LeftPannel.tsx';
import RightPanel from '@/pages/quest/Edit/RightPannel.tsx';
import EditHeader from '@/pages/quest/Edit/EditHeader.tsx';

const Edit: FC = () => {
  const { loading } = useLoadQuestionData();
  const dispatch = useDispatch();
  function clearSelectedId() {
    dispatch(changeSelectedId(''));
  }
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <EditHeader />
      </div>
      <div className={styles['container-wrapper']}>
        <div className={styles['content']}>
          <div className={styles['left']}>
            <LeftPanel />
          </div>
          <div className={styles['main']} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles['right']}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
