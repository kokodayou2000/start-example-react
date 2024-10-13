export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export type QuestionTitlePropsType = {
  text?: string;
  level?: TitleLevel;
  center?: boolean;
  onChange?: (newProps: QuestionTitlePropsType) => void;
  disabled?: boolean;
};

export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  text: '默认标题',
  level: 1,
  center: false,
};
