import { FC } from 'react';
import { Typography } from 'antd';
import { QuestionParagraphPropsType } from '@/components/QuestionComponents/QuestionParagraph/interface.ts';
import { QuestionTitleDefaultProps } from '@/components/QuestionComponents/QuestionTitle';

const { Paragraph } = Typography;
const Component: FC<QuestionParagraphPropsType> = (
  props: QuestionParagraphPropsType,
) => {
  const { text = '', isCenter = false } = {
    ...QuestionTitleDefaultProps,
    ...props,
  };
  const textList = text.split('\n');
  return (
    <Paragraph
      style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}
    >
      {textList.map((text, index) => {
        return (
          <span key={index}>
            {index > 0 && <br />}
            {text}
          </span>
        );
      })}
    </Paragraph>
  );
};

export default Component;
