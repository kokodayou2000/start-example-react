import { FC } from 'react';
import {
  QuestionRadioDefaultProps,
  QuestionRadioPropsType,
} from '@/components/QuestionComponents/QuestionRadio/interface.ts';
import { Radio, Space, Typography } from 'antd';

const { Paragraph } = Typography;

const Component: FC<QuestionRadioPropsType> = (
  props: QuestionRadioPropsType,
) => {
  const {
    title = '',
    vertical = false,
    options = [],
    value = '',
  } = { ...QuestionRadioDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={vertical ? 'vertical' : 'horizontal'}>
          {options.map((opt, index) => {
            const { value, text } = opt;
            return (
              <Radio key={index} value={value}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default Component;
