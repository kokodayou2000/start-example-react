// 用户
export interface User {
  email: string;
  password: string;
}

export interface BaseUser {
  id: string;
  email: string;
}

export interface RegisterReq {
  email: string;
  password: string;
}

export interface LoginResp {
  user: BaseUser;
  token: string;
}

// 用户登录的时候新增一个remember
export interface LoginUser extends User {

}
// 用户状态类型
export interface UserStateType {
  username: string;
  nickname: string;
}
// 状态类型
export interface StateType {
  user: UserStateType;
  // components: ComponentsStateType
  components: StateWithHistory<ComponentsStateType>;
  pageInfo: PageInfoType;
}
