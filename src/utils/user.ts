const KEY = 'USER_TOKEN';

export function setToken(token: string): void {
  localStorage.setItem(KEY, token);
}
export function getToken() {
  return localStorage.getItem(KEY);
}

export function removeToken() {
  localStorage.removeItem(KEY);
}
