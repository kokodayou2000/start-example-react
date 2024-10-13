import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuestion } from '@/api/question.ts';
import { useRequest } from 'ahooks';
import { useDispatch } from 'react-redux';
import { ComponentInfoType, resetComponents } from '@/store/componentsReducer';

function useLoadQuestionData() {
  const { id = '' } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error, run } = useRequest(
    async function fn(q_id) {
      const data = await fetchQuestion(q_id);
      return data;
    },
    {
      manual: true,
    },
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    const { components = [] } = data;
    const componentList = components.map((item) => {
      return {
        fe_id: item.id,
        type: item.type,
        title: item.title,
        props: JSON.parse(item.props),
      } as ComponentInfoType;
    });
    let selectedId: string = '';
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    // 将 component 存储到 reducer 中
    dispatch(resetComponents({ componentList, selectedId: selectedId, copiedComponent: null }));
  }, [data]);

  useEffect(() => {
    run(id);
  }, [id]);

  return { loading, error };
}

export default useLoadQuestionData;
