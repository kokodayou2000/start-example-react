import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <>
      <div>主布局 头部</div>
      <div>
        <Outlet />
      </div>
      <div>主布局 底部</div>
    </>
  );
};

export default MainLayout;
