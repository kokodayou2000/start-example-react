import React, { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import styles from './common.module.scss';
import QuestionCard from '@/components/questionCard/QuestionCard.tsx';
import { Empty, Typography } from 'antd';
import ListSearch from '@/components/listSearch/ListSearch.tsx';
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
];
const List: FC = () => {
  useTitle('问卷网');

  const [questionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.commonHeader}>
        <div className={styles.commonHeaderLeft}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.commonHeaderRight}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.commonContent}>
        {questionList.length === 0 ? (
          <Empty description={<span>还没有收藏的数据哦</span>} />
        ) : (
          questionList.map((item) => {
            const { _id } = item;
            return <QuestionCard key={_id} {...item} />;
          })
        )}
      </div>
      <div className={styles.commonFooter}>分页</div>
    </>
  );
};

export default List;
