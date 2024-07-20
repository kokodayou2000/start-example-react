export interface PropsType {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
}

export interface SearchOption {
  keyword: string;
  isStar: boolean;
  isDelete: boolean;
  page: number;
  pageSize: number;
}

export interface SelectQuestion extends PropsType {
  isSelected: boolean;
}
