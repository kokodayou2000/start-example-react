import { FC } from 'react';
import useLoadQuestionData from '@/hooks/useLoadQuestionData.ts';

const Status: FC = () => {
  const { loading, questions } = useLoadQuestionData();
  return (
    <div>
      {loading ? <p>status loading</p> : <p>{JSON.stringify(questions)}</p>}
    </div>
  );
};

export default Status;
