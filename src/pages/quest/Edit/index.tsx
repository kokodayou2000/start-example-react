import { FC } from 'react';
import useLoadQuestionData from '@/hooks/useLoadQuestionData.ts';

const Edit: FC = () => {
  const { loading, questions } = useLoadQuestionData();
  return (
    <div>{loading ? <p>loading</p> : <p>{JSON.stringify(questions)}</p>}</div>
  );
};

export default Edit;
