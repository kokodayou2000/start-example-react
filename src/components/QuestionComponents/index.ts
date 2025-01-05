import QuestionInputConf, {
  QuestionInputPropsType,
} from '@/components/QuestionComponents/QuestionInput';
import QuestionTitleConf, {
  QuestionTitlePropsType,
} from '@/components/QuestionComponents/QuestionTitle';
import QuestionParagraphConf, {
  QuestionParagraphPropsType,
} from '@/components/QuestionComponents/QuestionParagraph';
import QuestionInfoConf, {
  QuestionInfoPropsType,
} from '@/components/QuestionComponents/QuestionInfo';

import QuestionTextareaConf, {
  QuestionTextareaPropsType,
} from '@/components/QuestionComponents/QuestionTextarea';

import QuestionRadioConf, {
  QuestionRadioPropsType,
} from '@/components/QuestionComponents/QuestionRadio';

import QuestionCheckboxConf, {
  QuestionCheckboxPropsType,
} from '@/components/QuestionComponents/QuestionCheckbox';
import { FC } from 'react';

// 各个组件的 prop type
export type ComponentPropType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType &
    QuestionCheckboxPropsType &
  QuestionInfoPropsType;

// 组件的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropType>;
  PropComponent: FC<ComponentPropType>;
  defaultProps: ComponentPropType;
};

// 全部组件配置的列表
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
  QuestionInfoConf,
  QuestionTextareaConf,
  QuestionRadioConf,
  QuestionCheckboxConf,
];

export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf, QuestionInfoConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionTextareaConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    components: [QuestionRadioConf,QuestionCheckboxConf],
  },
];

export function getComponentConfByType(
  type: string,
): ComponentConfType | undefined {
  return componentConfList.find((item) => item.type === type);
}
