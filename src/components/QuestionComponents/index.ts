import QuestionInputConf, {
  QuestionInputPropsType,
} from '@/components/QuestionComponents/QuestionInput';
import QuestionTitleConf, {
  QuestionTitlePropsType,
} from '@/components/QuestionComponents/QuestionTitle';
import QuestionParagraphConf, {
  QuestionParagraphPropsType,
} from '@/components/QuestionComponents/QuestionParagraph';
import { FC } from 'react';
// 各个组件的 prop type
export type ComponentPropType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType;

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
];

export const componentConfGroup = [
  {
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf],
  },
  {
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
];

export function getComponentConfByType(
  type: string,
): ComponentConfType | undefined {
  return componentConfList.find((item) => item.type === type);
}
