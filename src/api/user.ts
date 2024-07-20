import axios, { ResDataType } from './base.ts';

export async function auth(
  username: string,
  password: string,
): Promise<ResDataType> {
  const url = '/api/user/login';
  const body = { username: username, password: password };
  const data = (await axios.post(url, body)) as ResDataType;
  return data;
}

/**
 * 获取用户信息
 */
export async function fetchUserInfoData(): Promise<ResDataType> {
  const url = '/api/user/info';
  const data = (await axios.get(url)) as ResDataType;
  return data;
}

/**
 * 注册
 * @param username
 * @param password
 */
export async function registerService(
  username: string,
  password: string,
): Promise<ResDataType> {
  const url = '/api/user/register';
  const body = { username: username, password: password };
  const data = (await axios.post(url, body)) as ResDataType;
  return data;
}


