export interface BaseUser {
  id: string;
  nickname: string;
}
// 如果用户点击了记住密码
export interface LoginUser {
  email: string;
  password: string;
}
export interface RegisterReq extends LoginUser {
  code: string;
  captcha: string;
}

export interface LoginResp {
  user: BaseUser;
  token: string;
}

// 状态类型
export interface StateType {
  user: UserStateType;
  // components: ComponentsStateType
  components: StateWithHistory<ComponentsStateType>;
  pageInfo: PageInfoType;
}
