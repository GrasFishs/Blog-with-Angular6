import {Message} from './Message';

export const messages: Message[] = [
  {
    msgType: 1,
    type: 'comment',
    content: '博主想请教一下关于react native的geolocation组件的一些坑',
    date: new Date(),
    userId: '1',
    username: 'overload',
    avatar: '',
    articleId: '1',
    articleTitle: 'react native 的基本配置'
  },
  {
    msgType: 1,
    type: 'reply',
    content: '经过webpack打包后的sass文件已经被编译成css文件了',
    date: new Date(),
    userId: '2',
    username: '冰千里',
    avatar: '',
    articleId: '2',
    articleTitle: 'sass的使用'
  },
  {
    msgType: 1,
    type: 'review',
    content: '你的博文《色彩-Material design》已通过审核！',
    date: new Date(),
  },
  {
    msgType: 1,
    type: 'review',
    content: '你的博文《关于游戏分级的看法》未通过审核！该博文内容由于违反本站的XXX条例无法通过审核，请修改或不提交。',
    date: new Date(),
  },
  {
    msgType: 0,
    type: 'system',
    title: '新版本上线',
    content: '本站更新了XXX模块，可以XXX。1.01e更新添加了标签管理功能……',
    date: new Date(),
  },
  {
    msgType: 2,
    type: 'publish',
    content: '',
    date: new Date(),
    userId: '2',
    username: '冰千里',
    avatar: '',
    articleId: '3',
    articleTitle: 'sass的使用'
  },
  {
    msgType: 2,
    type: 'publish',
    content: '',
    date: new Date(),
    userId: '1',
    username: 'overload',
    avatar: '',
    articleId: '3',
    articleTitle: '大前端与云端的发展趋势分析'
  },
];
