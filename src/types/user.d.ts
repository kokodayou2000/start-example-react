// 用户
export interface User {
  username: string;
  password: string;
}

// 用户登录的时候新增一个remember
export interface LoginUser extends User {
  remember: boolean;
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
