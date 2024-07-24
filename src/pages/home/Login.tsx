import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { Form, Space, Typography, message, Input, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { LIST, MANAGE, REGISTER, wrapPath } from '@/router/routerConstant.ts';
import { auth } from '@/api/user.ts';
import { setToken } from '@/utils/user.ts';
import { LoginUser, User } from '@/types';

const { Title } = Typography;

const EMAIL_KEY = 'email';
const PASSWORD_KEY = 'password';

function setUserInfoToStorage(email: string, password: string) {
  localStorage.setItem(EMAIL_KEY, email);
  localStorage.setItem(PASSWORD_KEY, password);
}

function getUserInfoFromStorage() {
  return {
    email: localStorage.getItem(EMAIL_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  } as User;
}
const Login: FC = () => {
  const nav = useNavigate();

  const [form] = Form.useForm();
  useEffect(() => {
    const { email, password } = getUserInfoFromStorage();
    form.setFieldsValue({ email, password });
  }, []);

  const { run } = useRequest(
    async (email: string, password: string) => {
      const data = await auth(email, password);
      return data;
    },
    {
      manual: true,
      onSuccess(result) {
        const { token = '' } = result;
        setToken(token);
        message.success('登录成功');
        nav(wrapPath(MANAGE, LIST));
      },
    },
  );

  const onFinish = (values: LoginUser) => {
    const { email, password } = values || {};
    run(email, password);
    setUserInfoToStorage(email, password);
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
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
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={wrapPath(REGISTER)}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
