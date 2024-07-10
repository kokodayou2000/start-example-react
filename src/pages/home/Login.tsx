import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const nav = useNavigate();
  function goHome() {
    nav('/');
  }
  return (
    <>
      <div>登录</div>
      <div>
        <button onClick={goHome}>取消登录</button>
      </div>
    </>
  );
};

export default Login;
