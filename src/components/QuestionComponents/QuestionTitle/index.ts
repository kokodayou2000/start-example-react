import Component from '@/components/QuestionComponents/QuestionTitle/Component.tsx';
import { QuestionTitleDefaultProps } from '@/components/QuestionComponents/QuestionTitle/interface.ts';

export * from './interface';

export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps,
};
