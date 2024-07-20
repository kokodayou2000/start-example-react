import { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './common.module.scss';
import QuestionCard from '@/components/QuestionCard.tsx';
import { Empty, Typography } from 'antd';
const { Title } = Typography;

const rawQuestionList = [
  {
    _id: 'q1',
    title: 'q1',
    isStar: true,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
  {
    _id: 'q2',
    title: 'q2',
    isStar: true,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
  {
    _id: 'q3',
    title: 'q3',
    isStar: true,
    isPublished: false,
    answerCount: 0,
    createdAt: '',
  },
];
const List: FC = () => {
  useTitle('问卷网');
  const [questionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表*/}
        {questionList.length === 0 ? (
          <Empty />
        ) : (
          questionList.map((item) => {
            const { _id } = item;
            return <QuestionCard key={_id} {...item} />;
          })
        )}
      </div>
      <div className={styles.footer}>list page footer</div>
    </>
  );
};

export default List;
