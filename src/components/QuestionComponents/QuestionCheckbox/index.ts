import Component from './Component';
import PropComponent from '@/components/QuestionComponents/QuestionCheckbox/PropComponent.tsx';
import {QuestionCheckboxDefaultProps} from "@/components/QuestionComponents/QuestionCheckbox/interface.ts";

export * from './interface';

export default {
  title: '多选按钮',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  defaultProps: QuestionCheckboxDefaultProps,
};
