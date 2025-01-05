import { FC, useEffect } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { QuestionInfoPropsType } from '@/components/QuestionComponents/QuestionInfo/interface.ts';

const PropComponent: FC<QuestionInfoPropsType> = (
  props: QuestionInfoPropsType,
) => {
  const { title, desc, center, onChange, disabled } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ title, desc, center });
  }, [title, desc, center, form]);

  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }

  return (
    <Form
      form={form}
      disabled={disabled}
      layout="vertical"
      onValuesChange={handleValueChange}
      initialValues={{ title, desc }}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="描述"
        name="desc"
        rules={[{ required: true, message: '必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="center" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
