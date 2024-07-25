import { FC, useEffect, useState } from 'react';
import { Button, Form, Input, message, Space, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './Register.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { fetchCaptchaCode, registerService } from '@/api/user.ts';
import { LOGIN } from '@/router/routerConstant.ts';
import { CaptchaResp } from '@/types';

const { Title } = Typography;

/**
 * 指定button的htmlType，让 点击按钮的时候，触发 form onFinish
 * @constructor
 */
const Register: FC = () => {
  const nav = useNavigate();

  const [captchaData, setCaptchaData] = useState<CaptchaResp>({
    image: '',
    uuidKey: '',
  });
  // 页面加载的时候，执行，但是会执行两次
  useEffect(() => {
    const fetchCaptchaCodeFunc = async () => {
      const data = await fetchCaptchaCode();
      setCaptchaData(data);
      console.log(data);
    };
    fetchCaptchaCodeFunc();
  }, []);

  const registerReq = useRequest(
    async (values) => {
      const { username, password } = values;
      await registerService(username, password);
    },
    {
      manual: true,
      onSuccess() {
        message.success('注册成功');
        nav(LOGIN); // 跳转到登录页
      },
    },
  );

  const onFinish = (values: never) => {
    registerReq.run(values); // 调用 ajax
  };

  const sendEmail = () => {
    setStepStatus(false);
  };
  const [stepStatus, setStepStatus] = useState(true);
  const Step1 = () => {
    return (
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={sendEmail}
      >
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱' },
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '只能是邮箱地址哦',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="code"
          rules={[
            { required: true, message: '请输入验证码' },
            {
              type: 'string',
              min: 4,
              max: 4,
              message: '长度为4',
            },
          ]}
        >
          <div>
            <Input />
            <img src={captchaData.image} alt="" />
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };
  const Step2 = () => {
    return (
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="邮箱验证码"
          name="code"
          rules={[
            { required: true, message: '验证码' },
            {
              type: 'string',
              min: 4,
              max: 4,
              message: '邮箱验证码长度为4',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirm"
          dependencies={['password']} // 依赖于 password ，password 变化，会重新触发 validator
          rules={[
            { required: true, message: '请输入密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(new Error('两次密码不一致'));
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Space>
        </Form.Item>
      </Form>
    );
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>
      <div>{stepStatus ? <Step1 /> : <Step2 />}</div>
    </div>
  );
};

export default Register;
