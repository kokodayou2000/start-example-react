import { FC, useEffect, useState } from 'react';
import { useRequest, useTitle } from 'ahooks';
import styles from './common.module.scss';
import QuestionCard from '@/components/questionCard/QuestionCard.tsx';
import { Empty, Typography } from 'antd';
import ListSearch from '@/components/listSearch/ListSearch.tsx';
import { fetchQuestionList } from '@/api/question.ts';
import { QuestionProps } from '@/types';
const { Title } = Typography;

const rawQuestionList = [
  {
    id: 'q1',
    title: 'q1',
    star: true,
    published: true,
    answerCount: 0,
    createdAt: '',
  },
] as QuestionProps[];
const List: FC = () => {
  useTitle('问卷网');

  const { data } = useRequest(
    async function fn() {
      const data = await fetchQuestionList({
        pageIndex: 0,
        pageSize: 4,
        deleted: false,
        star: false,
      });
      return data.content;
    },
    {
      manual: false,
    },
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    setQuestionList(data);
  }, [data]);
  const [questionList, setQuestionList] = useState(rawQuestionList);
  console.log(data);
  // run();
  // if (loading) {
  //   return <Spin />;
  // } else if (error) {
  //   return <Empty />;
  // } else {
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
        {questionList && questionList.length === 0 ? (
          <Empty />
        ) : (
          questionList &&
          questionList.map((item) => {
            const { id } = item;
            return <QuestionCard key={id} {...item} />;
          })
        )}
      </div>
      <div className={styles.commonFooter}>list page footer</div>
    </>
  );
  // }
};

export default List;
