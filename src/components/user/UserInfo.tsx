import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, wrapPath } from '@/router/routerConstant.ts';
import style from './UserInfo.module.scss';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '@/use/useAuth.ts';
import { useLocalStorageState } from 'ahooks';
import { USER_INFO } from '@/constant/user.ts';
import { BaseUser } from '@/types';

const UserInfo: FC = () => {
  const { useLogout } = useAuth();
  const [userInfo] = useLocalStorageState<BaseUser>(USER_INFO);
  const UserInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        {userInfo?.nickname}
        <UserOutlined />
      </span>
      <Button type="link" onClick={useLogout}>
        退出
      </Button>
    </>
  );
  const Login = (
    <>
      <Link className={style.login} to={wrapPath(LOGIN)}>
        登录
      </Link>
    </>
  );
  return (
    <>
      <div>{userInfo ? UserInfo : Login}</div>{' '}
    </>
  );
};

export default UserInfo;
