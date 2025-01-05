export type OptionType = {
  value: string;
  text: string;
  checked: boolean;
};

export type QuestionCheckboxPropsType = {
  title?: string;
  vertical?: boolean;
  list?: OptionType[];

  onChange?: (newProps: QuestionCheckboxPropsType) => void;
  disabled?: boolean;
};

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
  title: '多选按钮',
  vertical: false,
  list: [
    {
      value: 'item1',
      text: '选项1',
      checked: false,
    },
    {
      value: 'item2',
      text: '选项2',
      checked: false,
    },
  ],
};
