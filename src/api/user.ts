import instance from './base.ts';
import { CaptchaResp, LoginResp } from '@/types';

// 尝试获取验证码
export async function fetchCaptchaCode(): Promise<CaptchaResp> {
  const url = '/api/v1/notify/captcha';
  return await instance.get(url);
}

export async function auth(
  email: string,
  password: string,
): Promise<LoginResp> {
  const url = '/api/v1/user/login';
  const body = { email: email, password: password };
  return await instance.post(url, body);
}

/**
 * 获取用户信息
 */
export async function fetchUserInfoData(): Promise<never> {
  const url = '/api/user/info';
  return await instance.get(url);
}

/**
 * 注册
 * @param username
 * @param password
 */
export async function registerService(
  username: string,
  password: string,
): Promise<never> {
  const url = '/api/user/register';
  const body = { username: username, password: password };
  return await instance.post(url, body);
}
