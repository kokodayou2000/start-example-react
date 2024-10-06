import { FC } from 'react';
import styles from './Edit.module.scss';
import EditCanvas from '@/pages/quest/Edit/EditCanvas.tsx';
import useLoadQuestionData from '@/hooks/useLoadQuestionData.ts';
import { useDispatch } from 'react-redux';
import { changeSelectedId } from '@/store/componentsReducer';

const Edit: FC = () => {
  const { loading } = useLoadQuestionData();
  const dispatch = useDispatch();
  function clearSelectedId() {
    dispatch(changeSelectedId(''));
  }
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>header</div>
      <div className={styles['container-wrapper']}>
        <div className={styles['content']}>
          <div className={styles['left']}>Left</div>
          <div className={styles['main']} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles['right']}>Right</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
