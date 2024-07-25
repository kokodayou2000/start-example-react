// 提醒功能
export interface CaptchaResp {
  uuidKey: string;
  image: string;
}

export interface SendEmailReq {
  target: string;
  uuidKey: string;
  captcha: string;
}
