import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import { Form, Space, Typography, Input, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useLocalStorageState } from 'ahooks';
import { REGISTER, wrapPath } from '@/router/routerConstant.ts';
import { LoginUser } from '@/types';
import { useAuth } from '@/use/useAuth.ts';
import { LOGIN_INFO } from '@/constant/user.ts';

const { Title } = Typography;

const Login: FC = () => {
  const [form] = Form.useForm();
  const [user, setUser] = useLocalStorageState(LOGIN_INFO, {
    defaultValue: { email: '', password: '' } as LoginUser,
  });
  useEffect(() => {
    const { email, password } =
      user || ({ email: '', password: '' } as LoginUser);
    form.setFieldsValue({ email, password });
  }, []);
  const { useLogin } = useAuth();
  const { run } = useLogin();
  const onFinish = (values: LoginUser) => {
    const { email, password } = values || {};
    run(email, password);
    setUser({ email, password });
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
