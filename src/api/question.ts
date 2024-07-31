import instance from '@/api/base.ts';
import { QuestionProps, UpdateQuestionReq } from '@/types';

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
  options: Partial<QuestionProps> = {},
): Promise<QuestionProps[]> {
  const url = wrapQuestionPath('list');
  return await instance.get(url, { params: options });
}

/**
 * 更新单个问卷
 * @param params 参数
 */
export async function updateQuestionApi(
  params: UpdateQuestionReq,
): Promise<QuestionProps> {
  const url = wrapQuestionPath('updateQuestion');
  return await instance.patch(url, params);
}

// 复制问卷
export async function duplicateQuestionApi(id: string): Promise<QuestionProps> {
  const url = wrapQuestionPath('duplicate' + id);
  return await instance.post(url);
}
