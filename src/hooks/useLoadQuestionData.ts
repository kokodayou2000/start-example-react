import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuestion } from '@/api/question.ts';

function useLoadQuestionData() {
  const { id = '' } = useParams();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState({});
  useEffect(() => {
    async function fn() {
      const data = await fetchQuestion(id);
      setQuestions(data);
      setLoading(false);
    }
    fn();
  }, []);
  return { loading, questions };
}

export default useLoadQuestionData;
