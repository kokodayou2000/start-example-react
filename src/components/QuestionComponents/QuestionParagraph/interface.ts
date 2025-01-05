// 段落的属性类型
export type QuestionParagraphPropsType = {
  text?: string;
  isCenter?: boolean;
  onChange?: (newProps: QuestionParagraphPropsType) => void;
  disabled?: boolean;
};

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: '段落',
  isCenter: false,
};
