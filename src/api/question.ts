import instance, { ResDataType } from '@/api/base.ts';
import { QuestionProps, SearchOption } from '@/types';

export async function fetchQuestion(id: string) {
  const url = `/api/v1/question/queryById/${id}`;
  const data = await instance.get(url);
  return data;
}

export async function createQuestion(): Promise<QuestionProps> {
  const url = '/api/v1/question/createNewQuestion';
  return await instance.post(url);
}
export async function fetchQuestionList(
  options: Partial<SearchOption> = {},
): Promise<QuestionProps> {
  const url = '/api/v1/question/list';
  return await instance.get(url, { params: options });
}
// 更新单个问卷
export async function updateQuestionService(
  id: string,
  opt: { [key: string]: any },
): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  const data = (await instance.patch(url, opt)) as ResDataType;
  return data;
}

// 复制问卷
export async function duplicateQuestionService(
  id: string,
): Promise<ResDataType> {
  const url = `/api/question/duplicate/${id}`;
  const data = (await instance.post(url)) as ResDataType;
  return data;
}
