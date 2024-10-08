import { FC, useEffect } from 'react';
import { Checkbox, Form, Input, Select } from 'antd';
import { QuestionTitlePropsType } from '@/components/QuestionComponents/QuestionTitle/interface.ts';

const PropComponent: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType,
) => {
  const { text, center, level } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ text, center, level });
  }, [text, center, level]);

  return (
    <Form form={form} layout="vertical" initialValues={{ text, center, level }}>
      <Form.Item
        label="标题内容"
        name="text"
        rules={[{ required: true, message: '必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="层级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
            { value: 4, text: 4 },
            { value: 5, text: 5 },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="center" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
