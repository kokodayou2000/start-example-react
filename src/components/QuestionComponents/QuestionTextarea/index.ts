import Component from '@/components/QuestionComponents/QuestionTextarea/Component.tsx';
import PropComponent from '@/components/QuestionComponents/QuestionTextarea/PropComponent.tsx';
import {QuestionTextareaDefaultProps} from "@/components/QuestionComponents/QuestionTextarea/interface.ts";

export * from './interface';

export default {
  title: '多行输入框',
  type: 'questionTextarea',
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
};
