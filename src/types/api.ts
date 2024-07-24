export interface AjaxResult<T> {
  code: number;
  data?: T;
  msg?: string;
}
