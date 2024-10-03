import { FC } from 'react';
import {
  QuestionInputDefaultProps,
  QuestionInputPropsType,
} from '@/components/QuestionComponents/QuestionInput/interface.ts';
import { Typography, Input } from 'antd';
const { Paragraph } = Typography;
const QuestionInput: FC<QuestionInputPropsType> = (
  props: QuestionInputPropsType,
) => {
  const { title, placeholder } = { ...QuestionInputDefaultProps, ...props };

  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};

export default QuestionInput;
