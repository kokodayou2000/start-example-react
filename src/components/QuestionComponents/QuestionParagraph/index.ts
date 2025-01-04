/**
 * 问卷 段落
 */

import Component from './Component.tsx';
import { QuestionParagraphDefaultProps } from './interface';
import PropComponent from '@/components/QuestionComponents/QuestionParagraph/PropComponent.tsx';

export * from './interface.ts';

export default {
  title: '一行段落',
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
};
