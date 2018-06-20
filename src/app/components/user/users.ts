import {User} from './User';

export const users = [
  {
    userId: '1',
    username: 'grasfish',
    avatar: 'assets/grasfish.png',
    authorization: 0, // 0 普通，1管理员 ，2超管
    email: '123456@qq.com',
    phone: '555-1234',
    gender: 0, // 0 男，1 女，保密2
    signature: 'dasdasdas',
    website: '',
    followingAmount: 33,
    followedAmount: 2000,
    articleAmount: 5,
    likedAmount: 205
  },
  {
    userId: '2',
    username: 'overload',
    avatar: 'assets/ol.jpg',
    authorization: 0, // 0 普通，1管理员 ，2超管
    email: 'csd6594d@163.com',
    phone: '',
    gender: 2, // 0 男，1 女，保密2
    signature: '123321123457',
    website: 'https://163.com',
    followingAmount: 18,
    followedAmount: 5120,
    articleAmount: 38,
    likedAmount: 3182
  },
  {
    userId: '3',
    username: '冰千里',
    avatar: 'assets/ice.png',
    authorization: 0, // 0 普通，1管理员 ，2超管
    email: '123456@qq.com',
    phone: '555-1234',
    gender: 1, // 0 男，1 女，保密2
    signature: '',
    website: '',
    followingAmount: 33,
    followedAmount: 2000,
    articleAmount: 5,
    likedAmount: 205
  }
];
