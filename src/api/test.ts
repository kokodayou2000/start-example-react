import instance from './base.ts';

export async function test() {
  const url = '/api/test/get';
  return await instance.get(url);
}
