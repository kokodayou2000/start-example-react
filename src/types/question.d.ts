// question 只有 id是一定要有的
export interface QuestionProps {
  id: string;
  title?: string;
  answerCount?: number;
  createdBy?: string;
  createdAt?: string;
  published?: boolean;
  star?: boolean;
}

// 分页
export interface Page {
  pageIndex: number;
  pageSize: number;
}

// 分页查询
export interface QueryPage extends Page {
  title: string;
  deleted: boolean;
  star: boolean;
}

type UpdateQuestionType = 'deleted' | 'star' | 'published' | 'title';

export interface UpdateQuestionInfo {
  id: string;
  type: UpdateQuestionType;
  status?: boolean;
  title?: string;
}

export interface RealDeletedQuestionStatus {
  id: string;
}

export interface CountAddQuestion {
  id: string;
}

export interface CountMinusQuestion {
  id: string;
}
