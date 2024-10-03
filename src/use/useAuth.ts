import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorageState, useRequest } from 'ahooks';
import { BaseUser, LoginResp } from '@/types';
import { StoreType } from '@/store';
import { auth, registerApi } from '@/api/user.ts';
import { message } from 'antd';
import { LIST, LOGIN, MANAGE, wrapPath } from '@/router/routerConstant.ts';
import { login, logout } from '@/store/useUserSlice.ts';
import { useNavigate } from 'react-router-dom';
import { USER_INFO } from '@/constant/user.ts';

const INIT_USER_INFO: BaseUser = {
  id: '',
  nickname: '',
};

// user login logout
export function useAuth() {
  const dispatch = useDispatch();
  const [, setUserInfo] = useLocalStorageState<BaseUser>(USER_INFO, {
    defaultValue: INIT_USER_INFO,
  });
  const [, setToken] = useLocalStorageState('token', {
    defaultValue: '',
  });
  const nav = useNavigate();
  const user = useSelector<StoreType>((state) => state.userInfo) as BaseUser;
  // 登录
  const useLogin = () => {
    return useRequest(
      async (email: string, password: string) => {
        return await auth(email, password);
      },
      {
        manual: true,
        onSuccess(result: LoginResp) {
          const { user, token } = result;
          dispatch(login(user));
          setUserInfo(user);
          const newToken = token.replaceAll('"', '');
          setToken(newToken);
          message.success('登录成功');
          nav(wrapPath(MANAGE, LIST));
        },
      },
    );
  };
  // 登出
  const useLogout = () => {
    dispatch(logout());
    setUserInfo(INIT_USER_INFO);
    nav(LOGIN);
  };
  // 注册
  const useRegister = () => {
    return useRequest(
      async (requestData) => {
        return await registerApi(requestData);
      },
      {
        manual: true,
        onSuccess(result: BaseUser) {
          if (result) {
            message.success('注册成功');
            nav(LOGIN);
          }
        },
      },
    );
  };

  return {
    user,
    useRegister,
    useLogin,
    useLogout,
  };
}
