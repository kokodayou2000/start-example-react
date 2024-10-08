import Component from '@/components/QuestionComponents/QuestionInput/Component.tsx';
import { QuestionInputDefaultProps } from '@/components/QuestionComponents/QuestionInput/interface.ts';
import PropComponent from '@/components/QuestionComponents/QuestionInput/PropComponent.tsx';

export * from './interface';

export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  PropComponent,
  defaultProps: QuestionInputDefaultProps,
};
