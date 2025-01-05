import { FC, useEffect } from 'react';
import { QuestionTextareaPropsType } from '@/components/QuestionComponents/QuestionTextarea/interface.ts';
import { Form, Input } from 'antd';

const PropComponent: FC<QuestionTextareaPropsType> = (
  props: QuestionTextareaPropsType,
) => {
  const { title, placeholder, onChange, disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);
  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  }
  return (
    <Form
      form={form}
      disabled={disabled}
      onValuesChange={handleValueChange}
      layout="vertical"
      initialValues={{ title, placeholder }}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
