import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './MainLayout.module.scss';
import Logo from '@/components/logo/Logo.tsx';
import UserInfo from '@/components/user/UserInfo.tsx';

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  return (
    <>
      <Header className={styles.mainHeader}>
        <div className={styles.mainHeaderLeft}>
          <Logo />
        </div>
        <div className={styles.mainHeaderRight}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.mainContainer}>
        <Outlet />
      </Content>
      <Footer className={styles.mainFooter}>主布局 底部</Footer>
    </>
  );
};

export default MainLayout;
