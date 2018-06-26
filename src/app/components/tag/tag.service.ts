import {Injectable} from '@angular/core';
import {tags} from './tags';

@Injectable()
export class TagService {

  constructor() {
  }

  /**
   * 获取所有父标签的名称
   * @param {string} type
   * @returns {string[]}
   */
  getParentType(type: string): string[] {
    const types = [];
    let tag = tags.find(t => t.type === type);
    let pt = tag ? tag.parentType : null;
    while (pt) {
      types.push(tag.type);
      tag = tags.find(t => t.type === pt);
      pt = tag ? tag.parentType : null;
    }
    tag ? types.push(tag.type) : types.push(type);
    return types;
  }

  getRootType(): string[] {
    return tags.filter(tag => tag.parentType === '').map(tag => tag.type);
  }

}
