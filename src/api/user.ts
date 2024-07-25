import instance from './base.ts';
import { CaptchaResp, LoginResp, RegisterReq, SendEmailReq } from '@/types';

// 尝试获取验证码
export async function fetchCaptchaCode(): Promise<CaptchaResp> {
  const url = '/api/v1/notify/captcha';
  return await instance.get(url);
}

export async function sendEmailAPI(params: SendEmailReq): Promise<any> {
  const url = '/api/v1/notify/sendCode';
  return await instance.post(url, params);
}

export async function auth(
  email: string,
  password: string,
): Promise<LoginResp> {
  const url = '/api/v1/user/login';
  const body = { email: email, password: password };
  return await instance.post(url, body);
}

export async function registerService(data: RegisterReq): Promise<never> {
  const url = '/api/v1/user/register';
  return await instance.post(url, data);
}

export async function fetchUserInfoData(): Promise<never> {
  const url = '/api/user/info';
  return await instance.get(url);
}
