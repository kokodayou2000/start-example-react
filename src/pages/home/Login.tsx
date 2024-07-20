import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import {
  Form,
  Space,
  Typography,
  message,
  Input,
  Checkbox,
  Button,
} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { LIST, MANAGE, REGISTER, wrapPath } from '@/router/routerConstant.ts';
import { auth } from '@/api/user.ts';
import { setToken } from '@/utils/user.ts';

const { Title } = Typography;

const USERNAME_KEY = 'username';
const PASSWORD_KEY = 'password';

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  } as User;
}
const Login: FC = () => {
  const nav = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  }, []);

  const { run } = useRequest(
    async (username: string, password: string) => {
      const data = await auth(username, password);
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
    const { username, password, remember } = values || {};
    run(username, password);
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
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
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '字符长度在 5-20 之间',
              },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' },
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
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
