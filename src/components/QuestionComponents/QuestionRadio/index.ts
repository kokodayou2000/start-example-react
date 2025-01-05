import Component from './Component';
import { QuestionRadioDefaultProps } from '@/components/QuestionComponents/QuestionRadio/interface.ts';
import PropComponent from '@/components/QuestionComponents/QuestionRadio/PropComponent.tsx';

export * from './interface';

export default {
  title: '单选按钮',
  type: 'questionRadio',
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
};
