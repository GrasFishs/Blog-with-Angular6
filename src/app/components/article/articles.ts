import {Article} from './Article';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Typescript入门指南',
    tag: 'typescript',
    tagId: '1',
    content: `TypeScript是一种由微软开发的自由和开源的编程语言。
    它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类
    型和基于类的面向对象编程。安德斯·海尔斯伯格，C#的首席架构师，已工作于TypeScript的开
    发。2012年十月份，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后
    微软正式发布了正式版TypeScript 0.9，向未来的TypeScript 1.0版迈进了很大一步。……`,
    authorId: '1',
    author: 'grasfish',
    comments: '1.2k',
    likes: '1.0k',
    date: new Date(),
    cover: '',
    views: 33
  },
  {
    id: '2',
    title: '色彩2',
    tag: 'css',
    tagId: '2',
    content: `色彩从当代建筑、路标、人行横道以及运动场馆中获取灵感，由此引发出
    大胆的颜色表达激活了色彩，与单调乏味的周边环境形成鲜明的对比。强调大胆的
    阴影和高光。引出意想不到且充满活力的颜色。色彩从当代建筑、路标、人行横道以及
    运动场馆中获取灵感，由此引发出大胆的颜色表达激活了色彩，与单调乏味的周边环境
    形成鲜明的对比。……`,
    authorId: '2',
    author: 'overload',
    comments: '1.7k',
    likes: '1.5k',
    date: new Date(),
    cover: 'assets/cover.png',
    views: 1861
  },
  {
    id: '3',
    title: '色彩3',
    tag: '设计',
    tagId: '3',
    content: `色彩从当代建筑、路标、人行横道以及运动场馆中获取灵感，由此引发出
    大胆的颜色表达激活了色彩，与单调乏味的周边环境形成鲜明的对比。强调大胆的
    阴影和高光。引出意想不到且充满活力的颜色。色彩从当代建筑、路标、人行横道以及
    运动场馆中获取灵感，由此引发出大胆的颜色表达激活了色彩，与单调乏味的周边环境
    形成鲜明的对比。……`,
    authorId: '3',
    author: '冰千里',
    comments: '1.7k',
    likes: '1.5k',
    date: new Date(),
    cover: '',
    views: 359
  }
];
