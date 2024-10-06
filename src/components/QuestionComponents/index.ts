import QuestionInputConf, {
  QuestionInputPropsType,
} from '@/components/QuestionComponents/QuestionInput';
import QuestionTitleConf, {
  QuestionTitlePropsType,
} from '@/components/QuestionComponents/QuestionTitle';
import { FC } from 'react';

// 各个组件的 prop type
export type ComponentPropType = QuestionInputPropsType & QuestionTitlePropsType;

// 组件的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropType>;
  defaultProps: ComponentPropType;
};

// 全部组件配置的列表
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
];

export function getComponentConfByType(
  type: string,
): ComponentConfType | undefined {
  return componentConfList.find((item) => item.type === type);
}
