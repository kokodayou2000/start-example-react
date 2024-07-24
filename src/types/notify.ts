export interface CaptchaResp {
  uuidKey: string;
  image: string;
}

export interface SendEmailReq {
  target: string;
  uuidKey: string;
  code: string;
}
