import { useSearchParams } from 'react-router-dom';
import { useRequest } from 'ahooks';

import { fetchQuestionList } from '@/api/question.ts';
import { QueryPage } from '@/types';

export function useLoadingQuestionListData(opt: Partial<QueryPage>) {
  const [searchParams] = useSearchParams();
  const { data, loading, error, refresh } = useRequest(
    async () => {
      const data = await fetchQuestionList(opt);
      return data;
    },
    {
      refreshDeps: [searchParams],
    },
  );
  return {
    data,
    loading,
    error,
    refresh,
  };
}
