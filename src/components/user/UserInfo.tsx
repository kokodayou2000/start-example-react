import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, wrapPath } from '@/router/routerConstant.ts';
import style from './UserInfo.module.scss';

const UserInfo: FC = () => {
  return (
    <>
      <Link className={style.login} to={wrapPath(LOGIN)}>
        登录
      </Link>
    </>
  );
};

export default UserInfo;
