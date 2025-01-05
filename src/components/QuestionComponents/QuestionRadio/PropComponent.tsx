import {
  OptionType,
  QuestionRadioPropsType,
} from '@/components/QuestionComponents/QuestionRadio/interface.ts';
import { FC, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';

const PropComponent: FC<QuestionRadioPropsType> = (
  props: QuestionRadioPropsType,
) => {
  const { title, vertical, value, options = [], onChange, disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    console.log('form');
    console.log(form.getFieldsValue());
    form.setFieldsValue({ title, vertical, value, options, disabled });
  }, [title, vertical, value, options, form, disabled]);
  function handleValuesChange() {
    if (onChange == null) return;
    const newValue = form.getFieldsValue() as QuestionRadioPropsType;
    const { options = [] } = newValue;
    options.forEach((opt) => {
      if (opt.value) return;
      opt.value = nanoid(5);
    });
    newValue.options = options.filter((item) => item.text !== undefined);
    debugger
    onChange(newValue);
  }
  return (
    <Form
      layout={'vertical'}
      initialValues={{ title, vertical, value, options }}
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
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map((item, index) => {
                return (
                  <Space key={index} align={'baseline'}>
                    <Form.Item
                      name={[item.name, 'text']}
                      rules={[
                        { required: true, message: '不能为空' },
                        (form) => ({
                          // 自定义验证器
                          validator(_, text) {
                            const { options = [] } = form.getFieldsValue();
                            let count = 0;
                            options.forEach((opt: OptionType) => {
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
                    {index > 1 && (
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
                    });
                  }}
                >
                  添加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item label="默认选中" name="value">
        <Select
          value={value}
          options={options.map((opt) => ({
            value: opt.value,
            label: opt.text || '',
          }))}
        ></Select>
      </Form.Item>
      <Form.Item name="vertical" valuePropName="checked">
        <Checkbox>是否垂直</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
