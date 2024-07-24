import instance, { ResDataType } from '@/api/base.ts';

export async function getQuestion(id: string) {
  const url = `/api/question/${id}`;
  const data = await instance.get(url);
  return data;
}

export async function createQuestion(data: any): Promise<ResDataType> {
  const url = '/api/v1/createQuestion';
  return await instance.post(url, data);
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
