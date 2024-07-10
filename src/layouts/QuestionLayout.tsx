import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const QuestionLayout: FC = () => {
  return (
    <>
      <div>问卷页头部</div>
      <div>
        <Outlet />
      </div>
      <div>问卷页底部</div>
    </>
  );
};

export default QuestionLayout;
