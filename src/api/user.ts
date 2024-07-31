import instance from './base.ts';
import { CaptchaResp, LoginResp, RegisterReq, SendEmailReq } from '@/types';

const wrapUserPath = (path: string) => {
  return `/api/v1/notify/${path}`;
};

/**
 * 尝试获取验证码
 */
export async function fetchCaptchaCode(): Promise<CaptchaResp> {
  const url = wrapUserPath('captcha');
  return await instance.get(url);
}

/**
 * 尝试获取验证码
 * @param params
 */
export async function sendEmailApi(params: SendEmailReq): Promise<string> {
  const url = wrapUserPath('sendCode');
  return await instance.post(url, params);
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
