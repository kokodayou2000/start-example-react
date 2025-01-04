import { FC } from 'react';
import {
  QuestionTitleDefaultProps,
  QuestionTitlePropsType,
  TitleLevel,
} from '@/components/QuestionComponents/QuestionTitle/interface.ts';
import { Typography } from 'antd';
const { Title } = Typography;
const QuestionTitle: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType,
) => {
  const {
    text,
    level = {} as TitleLevel,
    center,
  } = { ...QuestionTitleDefaultProps, ...props };
  const genFontSize = (level: TitleLevel) => {
    if (level === 1) return '24px';
    if (level === 2) return '20px';
    if (level === 3) return '16px';
    if (level === 4) return '12px';
    if (level === 5) return '10px';
  };
  return (
    <Title
      level={level}
      style={{
        textAlign: center ? 'center' : 'start',
        fontSize: genFontSize(level),
      }}
    >
      {text}
    </Title>
  );
};

export default QuestionTitle;
