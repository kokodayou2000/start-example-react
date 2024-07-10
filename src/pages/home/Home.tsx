import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex } from 'antd';

const Home: FC = () => {
  const nav = useNavigate();

  function gotoLogin() {
    nav({
      pathname: '/login',
      search: 'b=21',
    });
  }

  return (
    <>
      <p>Home</p>
      <div>
        <Flex gap="small" wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
        <Button onClick={gotoLogin}>登录</Button>
        <Link to="/register">注册</Link>
      </div>
    </>
  );
};

export default Home;
