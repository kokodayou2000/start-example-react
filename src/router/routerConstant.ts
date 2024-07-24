export const HOME = '/';

export const LOGIN = 'login';

export const REGISTER = 'register';

export const MANAGE = 'manage';

export const LIST = 'list';

export const STAR = 'star';

export const TRASH = 'trash';

export const DASH = '*';

export const QUESTION = 'questionCard';

export const EDIT = 'edit';

export const STATUS = 'status';

export const wrapPath = (...args: string[]) => {
  const pathList = args.map((arg: string) => `/${arg}`);
  const path = pathList.join('');
  console.log('path: ' + path);
  return path;
};
