import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './MainLayout.module.scss';
import Logo from '@/components/Logo.tsx';
import UserInfo from '@/components/UserInfo.tsx';

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>主布局 底部</Footer>
    </>
  );
};

export default MainLayout;
