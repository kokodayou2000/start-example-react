import { FC, useEffect, useState } from 'react';
import { Space, Typography } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { HOME, LIST, MANAGE, wrapPath } from '@/router/routerConstant.ts';
import { useAuth } from '@/use/useAuth.ts';

const { Title } = Typography;

const Logo: FC = () => {
  const { user } = useAuth();
  const { id, nickname } = user;
  const [pathname, setPathname] = useState(HOME);
  useEffect(() => {
    if (id) {
      setPathname(wrapPath(MANAGE, LIST));
    } else {
      setPathname(HOME);
    }
  }, [nickname]);
  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>问卷</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
