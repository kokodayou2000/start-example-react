import { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './common.module.scss';
import QuestionCard from '@/components/questionCard/QuestionCard.tsx';
import { Empty, Typography } from 'antd';
import ListSearch from '@/components/listSearch/ListSearch.tsx';
const { Title } = Typography;

const rawQuestionList = [
  {
    id: 'q1',
    title: 'q1',
    isStar: true,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
  {
    id: 'q2',
    title: 'q2',
    isStar: true,
    isPublished: true,
    answerCount: 0,
    createdAt: '',
  },
  {
    id: 'q3',
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
      <div className={styles.commonHeader}>
        <div className={styles.commonHeaderLeft}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.commonHeaderRight}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.commonContent}>
        {/* 问卷列表*/}
        {questionList.length === 0 ? (
          <Empty />
        ) : (
          questionList.map((item) => {
            const { id } = item;
            return <QuestionCard key={id} {...item} />;
          })
        )}
      </div>
      <div className={styles.commonFooter}>list page footer</div>
    </>
  );
};

export default List;
