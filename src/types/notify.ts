/**
 * 提醒功能
 */
export interface CaptchaResp {
  uuidKey: string;
  image: string;
}

/**
 * 发送邮箱请求
 */
export interface SendEmailReq {
  target: string;
  uuidKey: string;
  captcha: string;
}
