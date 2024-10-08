import { FC, useEffect } from 'react';
import { QuestionInputPropsType } from '@/components/QuestionComponents/QuestionInput/interface.ts';
import { Form, Input } from 'antd';

const PropComponent: FC<QuestionInputPropsType> = (
  props: QuestionInputPropsType,
) => {
  const { title, placeholder } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);

  return (
    <Form form={form} layout="vertical" initialValues={{ title, placeholder }}>
      <Form.Item label="标题" rules={[{ required: true, message: '必填' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
