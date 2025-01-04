import Component from '@/components/QuestionComponents/QuestionInfo/Component.tsx';
import PropComponent from '@/components/QuestionComponents/QuestionInfo/PropComponent.tsx';
import {QuestionInfoDefaultProps} from "@/components/QuestionComponents/QuestionInfo/interface.ts";

export * from './interface';

export default {
    title: '标题',
    type: 'questionInfo',
    Component,
    PropComponent,
    defaultProps: QuestionInfoDefaultProps,
};
