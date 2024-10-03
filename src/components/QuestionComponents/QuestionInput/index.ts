import Component from '@/components/QuestionComponents/QuestionInput/Component.tsx';
import { QuestionInputDefaultProps } from '@/components/QuestionComponents/QuestionInput/interface.ts';

export * from './interface';

export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  defaultProps: QuestionInputDefaultProps,
};
