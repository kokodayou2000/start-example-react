import instance from '@/api/base.ts';
import { QueryPage, QuestionProps, UpdateQuestionInfo } from '@/types';

const wrapQuestionPath = (path) => {
  return `/api/v1/question/${path}`;
};

/**
 * 根据id获取question
 * @param id 问题id
 */
export async function fetchQuestion(id: string): Promise<QuestionProps> {
  const url = wrapQuestionPath('queryById/' + id);
  return await instance.get(url);
}

/**
 * 创建question
 */
export async function createQuestion(): Promise<QuestionProps> {
  const url = wrapQuestionPath('createNewQuestion');
  return await instance.post(url);
}

/**
 * 获取问卷列表
 * @param options
 */
export async function fetchQuestionList(
  options: Partial<QueryPage> = {},
): Promise<QuestionProps[]> {
  const url = wrapQuestionPath('list');
  return await instance.get(url, { params: options });
}

/**
 * 更新问卷状态
 * @param params 参数
 */
export async function updateQuestionInfoApi(
  params: UpdateQuestionInfo,
): Promise<QuestionProps> {
  const url = wrapQuestionPath('updateQuestionInfo');
  return await instance.patch(url, params);
}

// 复制问卷
export async function duplicateQuestionApi(id: string): Promise<QuestionProps> {
  const url = wrapQuestionPath('duplicate' + id);
  return await instance.post(url);
}

// 从数据库删除
export async function realDeleteQuestionApi(
  id: string,
): Promise<QuestionProps> {
  const url = wrapQuestionPath('realDelete');
  return await instance.post(url + '/' + id);
}

// 填写次数
export async function writeTimesApi(id: string): Promise<string> {
  const url = wrapQuestionPath('write');
  return await instance.post(url + '/' + id);
}

// 查看次数
export async function readTimesApi(id: string): Promise<string> {
  const url = wrapQuestionPath('read');
  return await instance.post(url + '/' + id);
}
