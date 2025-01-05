import {
  OptionType,
  QuestionCheckboxPropsType,
} from '@/components/QuestionComponents/QuestionCheckbox/interface.ts';
import { FC, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';

const PropComponent: FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType,
) => {
  const { title, vertical, list = [], onChange,disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, vertical, list });
  }, [title, vertical, list, form]);
  function handleValuesChange() {
    if (onChange == null) return;
    const newValue = form.getFieldsValue() as QuestionCheckboxPropsType;
    const { list = [] } = newValue;
    list.forEach((opt) => {
      if (opt.value) return;
      opt.value = nanoid(5);
    });
    newValue.list = list.filter((item) => item.text !== undefined);
    onChange(newValue);
  }
  return (
    <Form
      layout={'vertical'}
      initialValues={{ title, vertical, list }}
      disabled={disabled}
      onValuesChange={handleValuesChange}
      form={form}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {fields.map((item, index) => {
                return (
                  <Space key={index} align={'baseline'}>
                    <Form.Item
                      name={[item.name, 'checked']}
                      valuePropName="checked"
                    >
                      <Checkbox />
                    </Form.Item>
                    <Form.Item
                      name={[item.name, 'text']}
                      rules={[
                        { required: true, message: '不能为空' },
                        (form) => ({
                          // 自定义验证器
                          validator(_, text) {
                            const { list = [] } = form.getFieldsValue();
                            let count = 0;
                            list.forEach((opt: OptionType) => {
                              if (opt.text === text) {
                                count++;
                              }
                            });
                            return count >= 2
                              ? Promise.reject(new Error('存在重复数据'))
                              : Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <Input placeholder={'输入选项文字。。'} />
                    </Form.Item>
                    {index > 0 && (
                      <MinusCircleOutlined onClick={() => remove(item.name)} />
                    )}
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  type={'link'}
                  onClick={() => {
                    add({
                      value: '',
                      text: '',
                      checked: false,
                    } as OptionType);
                  }}
                >
                  添加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="vertical" valuePropName="checked">
        <Checkbox>是否垂直</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
