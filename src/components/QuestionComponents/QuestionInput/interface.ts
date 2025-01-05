export type QuestionInputPropsType = {
  title?: string;
  placeholder?: string;
  onChange?: (newProps: QuestionInputPropsType) => void;
  disabled?: boolean;
};

export const QuestionInputDefaultProps:QuestionInputPropsType = {
  title: '单行文本框',
  placeholder: '请输入',
}
