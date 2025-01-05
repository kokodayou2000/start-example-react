export type OptionType = {
  value: string;
  text: string;
};

export type QuestionRadioPropsType = {
  title?: string;
  vertical?: boolean;
  options?: OptionType[];
  value?: string;

  onChange?: (newProps: QuestionRadioPropsType) => void;
  disabled?: boolean;
};

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: '单选标题',
  vertical: false,
  options: [
    {
      value: 'item1',
      text: '选项1',
    },
    {
      value: 'item2',
      text: '选项2',
    },
  ],
  value: '',
};
