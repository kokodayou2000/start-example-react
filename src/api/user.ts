import instance from './base.ts';
import { LoginResp, RegisterReq } from '@/types';

function wrapUserPath(path: string) {
  return '/api/v1/user/' + path;
}

/**
 * 登录
 * @param email 邮箱
 * @param password 密码
 */
export async function auth(
  email: string,
  password: string,
): Promise<LoginResp> {
  const url = wrapUserPath('login');
  const body = { email: email, password: password };
  return await instance.post(url, body);
}

/**
 * 注册
 * @param data
 */
export async function registerApi(data: RegisterReq): Promise<never> {
  const url = wrapUserPath('register');
  return await instance.post(url, data);
}

/**
 * 获取用户信息
 */
export async function fetchUserInfoData(): Promise<never> {
  const url = wrapUserPath('info');
  return await instance.get(url);
}
