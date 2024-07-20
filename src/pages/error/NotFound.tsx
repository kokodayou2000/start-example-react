import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LIST, MANAGE, wrapPath } from '@/router/routerConstant.ts';

const NotFound: FC = () => {
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="sorry"
      extra={
        <Button type="default" onClick={() => nav(wrapPath(MANAGE, LIST))}>
          返回
        </Button>
      }
    ></Result>
  );
};

export default NotFound;
