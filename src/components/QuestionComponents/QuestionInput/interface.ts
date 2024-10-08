export type QuestionInputPropsType = {
  title?: string;
  placeholder?: string;
  onChange?: (newProps: QuestionInputPropsType) => void;
};

export const QuestionInputDefaultProps = {
  title: '标题',
  placeholder: '请输入',
} as QuestionInputPropsType;
