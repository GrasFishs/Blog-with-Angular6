export interface User {
  userId: string;
  username: string;
  avatar: string;
  authorization: number; // 0 普通，1管理员 ，2超管
  email: string;
  phone: string;
  gender: number; // 0 男，1 女，保密2
  signature: string;
  website: string;
  followingAmount: number;
  followedAmount: number;
  articleAmount: number;
  likedAmount: number;
}
