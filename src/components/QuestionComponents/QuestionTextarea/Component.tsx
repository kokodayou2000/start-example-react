import { FC } from 'react';
import {
  QuestionTextareaDefaultProps,
  QuestionTextareaPropsType,
} from '@/components/QuestionComponents/QuestionTextarea/interface.ts';
import { Typography, Input } from 'antd';
const { Paragraph } = Typography;
const { TextArea } = Input;
const QuestionInput: FC<QuestionTextareaPropsType> = (
  props: QuestionTextareaPropsType,
) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props };

  return (
    <div>
      <Paragraph>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  );
};

export default QuestionInput;
