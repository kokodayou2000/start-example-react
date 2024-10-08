import Component from '@/components/QuestionComponents/QuestionTitle/Component.tsx';
import { QuestionTitleDefaultProps } from '@/components/QuestionComponents/QuestionTitle/interface.ts';
import PropComponent from '@/components/QuestionComponents/QuestionTitle/PropComponent.tsx';

export * from './interface';

export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
};
