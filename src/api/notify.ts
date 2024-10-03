import { CaptchaResp, SendEmailReq } from '@/types';
import instance from '@/api/base.ts';

const wrapNotifyPath = (path: string) => {
  return `/api/v1/notify/${path}`;
};

/**
 * 尝试获取验证码
 */
export async function fetchCaptchaCode(): Promise<CaptchaResp> {
  const url = wrapNotifyPath('captcha');
  return await instance.get(url);
}

/**
 * 尝试获取验证码
 * @param params
 */
export async function sendEmailApi(params: SendEmailReq): Promise<string> {
  const url = wrapNotifyPath('sendCode');
  return await instance.post(url, params);
}
