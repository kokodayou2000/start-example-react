import { FC } from 'react';
import {
  QuestionCheckboxDefaultProps,
  QuestionCheckboxPropsType,
} from '@/components/QuestionComponents/QuestionCheckbox/interface.ts';
import { Checkbox, Space, Typography } from 'antd';

const { Paragraph } = Typography;

const Component: FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType,
) => {
  const {
    title = '',
    vertical = false,
    list = [],
  } = { ...QuestionCheckboxDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={vertical ? 'vertical' : 'horizontal'}>
        {list.map((opt) => {
          const { value, text, checked } = opt;
          return (
            <Checkbox
              checked={checked}
              defaultChecked={checked}
              key={value}
              value={value}
            >
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};

export default Component;
