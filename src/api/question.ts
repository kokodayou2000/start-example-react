import instance, { ResDataType } from '@/api/base.ts';

export async function getQuestion(_id: string) {
  const url = `/api/question/${_id}`;
  const data = await instance.get(url);
  return data;
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
