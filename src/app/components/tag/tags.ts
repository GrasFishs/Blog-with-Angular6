export interface Tag {
  type: string;
  parentType: string;
}

const toTag = (arr: string[], p: string): Tag[] => (arr.map(tag => ({type: tag, parentType: p} as Tag)));

const parent = ['编程', '艺术', '设计', '文学', '心情', '体育', '科技'];
const program = ['前端', '后端', '大数据', '机器学习', '移动'];
const frontend = ['javascript', 'css', 'html', 'angular', 'vue', 'react', 'typescript'];
const root = toTag(parent, '');
const programTags = toTag(program, '编程');
const frontendTags = toTag(frontend, '前端');



export const tags: Tag[] = root.concat(programTags, frontendTags);
