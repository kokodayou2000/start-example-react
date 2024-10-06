import { FC } from 'react';
import useLoadQuestionData from '@/hooks/useLoadQuestionData.ts';

const Status: FC = () => {
  const { loading } = useLoadQuestionData();
  return (
    <div>{loading ? <p>status loading</p> : <p>{JSON.stringify({})}</p>}</div>
  );
};

export default Status;
