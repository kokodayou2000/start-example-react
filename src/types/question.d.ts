export interface QuestionProps {
  id: string;
  title: string;
  answerCount: number;
  createdBy: string;
  createdAt: string;
  published: boolean;
  star: boolean;
}

export interface UpdateQuestionReq {
  id: string;
  title: string;
  star: boolean;
  answerCount: number;
  published: boolean;
  createdAt: string;
}

export interface Page {
  pageIndex: number;
  pageSize: number;
}

export interface QuestionStatus {
  deleted: boolean;
  star: boolean;
}

export interface QueryQuestion extends Page, QuestionStatus {}
